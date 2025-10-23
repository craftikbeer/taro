async function getGroqAnalysis(person1Name, person1Date, person2Name, person2Date, score) {
  const systemPrompt = `Ты — эксперт по нумерологии с многолетним опытом. Твоя задача — давать глубокий, профессиональный анализ совместимости людей на основе нумерологических данных.

Важно:
- Пиши профессионально, но тепло и понятно
- Используй только связный текст, без списков и маркеров
- Анализ должен быть объемом 3-4 абзаца
- Фокусируйся на практических аспектах отношений`;

  const userPrompt = `Проанализируй совместимость двух людей:

Человек 1: ${person1Name}, дата рождения ${person1Date}
Человек 2: ${person2Name}, дата рождения ${person2Date}
Нумерологическая совместимость: ${score}%

Напиши детальный анализ их совместимости, включая:
- Эмоциональная связь и взаимопонимание
- Жизненные цели и ценности
- Потенциальные сильные стороны отношений
- Возможные сложности и способы их преодоления`;

  try {
    const proxyUrl = `https://proxy-api.trickle-app.host/?url=${encodeURIComponent(GROQ_API_URL)}`;
    
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Groq API error:', error);
    return null;
  }
}
