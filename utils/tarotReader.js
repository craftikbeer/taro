async function getTarotReading(spreadType, cards, question = '') {
  const systemPrompt = `Ты — опытный таролог с глубоким знанием символики карт Таро. Твоя задача — давать точные, глубокие и практичные толкования раскладов.

Важно:
- Пиши профессионально, но понятно
- Используй только связный текст
- Фокусируйся на практических советах
- Будь конкретным и честным`;

  let userPrompt = '';
  
  if (spreadType === 'daily') {
    const card = cards[0];
    const position = card.reversed ? 'перевернутая' : 'прямая';
    userPrompt = `Карта дня: ${card.name} (${position})
Значение: ${card.reversed ? card.reversed : card.upright}

Дай толкование этой карты на сегодняшний день. Что она советует? О чем предупреждает? Какую энергию несет?`;
  } else if (spreadType === 'three') {
    userPrompt = `Расклад на 3 карты:\n\n`;
    const positions = ['Прошлое', 'Настоящее', 'Будущее'];
    cards.forEach((card, i) => {
      const position = card.reversed ? 'перевернутая' : 'прямая';
      userPrompt += `${positions[i]}: ${card.name} (${position})\n`;
    });
    if (question) userPrompt += `\nВопрос: ${question}\n`;
    userPrompt += `\nДай глубокое толкование этого расклада. Как прошлое влияет на настоящее? Что ждет в будущем? Какие советы?`;
  } else if (spreadType === 'celtic') {
    userPrompt = `Кельтский крест (10 карт):\n\n`;
    const positions = [
      'Текущая ситуация',
      'Препятствие',
      'Основа',
      'Прошлое',
      'Возможное будущее',
      'Ближайшее будущее',
      'Вы сами',
      'Окружение',
      'Надежды и страхи',
      'Итог'
    ];
    cards.forEach((card, i) => {
      const position = card.reversed ? 'перевернутая' : 'прямая';
      userPrompt += `${i + 1}. ${positions[i]}: ${card.name} (${position})\n`;
    });
    if (question) userPrompt += `\nВопрос: ${question}\n`;
    userPrompt += `\nДай полное профессиональное толкование Кельтского креста. Раскрой каждую позицию и их взаимосвязи. Дай практические рекомендации.`;
  } else if (spreadType === 'compatibility') {
    userPrompt = `Расклад на совместимость:\n\n`;
    userPrompt += `Первый человек: ${cards[0].name} (${cards[0].reversed ? 'перевернутая' : 'прямая'})\n`;
    userPrompt += `Второй человек: ${cards[1].name} (${cards[1].reversed ? 'перевернутая' : 'прямая'})\n`;
    userPrompt += `Отношения: ${cards[2].name} (${cards[2].reversed ? 'перевернутая' : 'прямая'})\n`;
    userPrompt += `\nПроанализируй совместимость этих двух людей через призму выпавших карт. Какие сильные стороны отношений? Какие сложности? Что советуют карты?`;
  }

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
        temperature: 0.8,
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