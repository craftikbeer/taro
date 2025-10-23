async function getPersonalAnalysis(fullName, birthDate, gender, birthPlace) {
  const systemPrompt = `Ты — высококвалифицированный нумеролог с опытом более 20 лет, с глубоким знанием систем Пифагора, Каббалы, Халдейской школы, ведической нумерологии и современных психоматематических методов.

Твоя задача — провести точный, глубокий и практичный нумерологический анализ личности человека, который поможет:
– лучше понять себя
– принять важные решения
– распознать сильные и слабые стороны
– увидеть реальные жизненные задачи и сценарии
– получить опору в текущем моменте

СТРУКТУРА АНАЛИЗА:

1. ОСНОВНЫЕ ЧИСЛА (рассчитай и объясни каждое):
– Число Жизненного Пути
– Число Души
– Число Личности
– Число Судьбы / Выражения
– Число Зрелости
– Кармические долги (13, 14, 16, 19)
– Мастера-числа (11, 22, 33)

2. МАТРИЦА ПИФАГОРА:
Построй и прокомментируй блоки: сила воли, энергия, логика, здоровье, стабильность, интуиция, харизма, духовность

3. ЖИЗНЕННЫЕ ПЕРИОДЫ:
Проанализируй ближайшие 3 года: задачи, уроки, возможности

4. ПРАКТИЧЕСКИЕ РЕКОМЕНДАЦИИ:
– Профессия (3-5 направлений)
– Отношения
– Развитие и обучение
– Деньги и реализация

5. ИТОГОВАЯ ФОРМУЛА:
– Главная жизненная задача
– 3 опорные точки (силы)
– 3 зоны роста
– Один главный совет для текущего этапа

ВАЖНО:
– Без эзотерической воды
– Конкретные факты и внутренняя ясность
– Как мудрый наставник
– Анализ должен реально помочь изменить жизнь`;

  const genderText = gender === 'male' ? 'Мужской' : 'Женский';
  const placeText = birthPlace ? `, место рождения: ${birthPlace}` : '';

  const userPrompt = `Проведи полный нумерологический анализ для человека:

Полное имя: ${fullName}
Дата рождения: ${birthDate}
Пол: ${genderText}${placeText}

Выполни глубокий профессиональный анализ согласно структуре.`;

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
        max_tokens: 4000
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
