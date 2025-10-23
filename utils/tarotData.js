const TAROT_DECK = [
  { id: 0, name: 'Шут', suit: 'major', upright: 'Начало, спонтанность, свобода', reversed: 'Безрассудство, риск' },
  { id: 1, name: 'Маг', suit: 'major', upright: 'Сила воли, мастерство, проявление', reversed: 'Манипуляция, иллюзии' },
  { id: 2, name: 'Верховная Жрица', suit: 'major', upright: 'Интуиция, тайны, подсознание', reversed: 'Скрытность, самообман' },
  { id: 3, name: 'Императрица', suit: 'major', upright: 'Плодородие, изобилие, материнство', reversed: 'Зависимость, пустота' },
  { id: 4, name: 'Император', suit: 'major', upright: 'Власть, структура, контроль', reversed: 'Тирания, жесткость' },
  { id: 5, name: 'Иерофант', suit: 'major', upright: 'Традиции, учение, духовность', reversed: 'Догматизм, ограничения' },
  { id: 6, name: 'Влюбленные', suit: 'major', upright: 'Любовь, выбор, союз', reversed: 'Разлад, неверный выбор' },
  { id: 7, name: 'Колесница', suit: 'major', upright: 'Победа, контроль, движение вперед', reversed: 'Потеря контроля, агрессия' },
  { id: 8, name: 'Сила', suit: 'major', upright: 'Храбрость, терпение, контроль', reversed: 'Слабость, сомнения' },
  { id: 9, name: 'Отшельник', suit: 'major', upright: 'Уединение, поиск истины, мудрость', reversed: 'Изоляция, одиночество' },
  { id: 10, name: 'Колесо Фортуны', suit: 'major', upright: 'Судьба, перемены, удача', reversed: 'Неудача, застой' },
  { id: 11, name: 'Справедливость', suit: 'major', upright: 'Баланс, истина, закон', reversed: 'Несправедливость, предвзятость' },
  { id: 12, name: 'Повешенный', suit: 'major', upright: 'Пауза, жертва, новый взгляд', reversed: 'Застой, сопротивление' },
  { id: 13, name: 'Смерть', suit: 'major', upright: 'Трансформация, окончание, новое начало', reversed: 'Сопротивление переменам' },
  { id: 14, name: 'Умеренность', suit: 'major', upright: 'Баланс, гармония, терпение', reversed: 'Дисбаланс, крайности' },
  { id: 15, name: 'Дьявол', suit: 'major', upright: 'Зависимость, искушение, материализм', reversed: 'Освобождение, осознание' },
  { id: 16, name: 'Башня', suit: 'major', upright: 'Разрушение, откровение, освобождение', reversed: 'Катастрофа, сопротивление' },
  { id: 17, name: 'Звезда', suit: 'major', upright: 'Надежда, вдохновение, исцеление', reversed: 'Отчаяние, потеря веры' },
  { id: 18, name: 'Луна', suit: 'major', upright: 'Иллюзии, страхи, подсознание', reversed: 'Прояснение, преодоление страхов' },
  { id: 19, name: 'Солнце', suit: 'major', upright: 'Радость, успех, позитив', reversed: 'Временные трудности' },
  { id: 20, name: 'Суд', suit: 'major', upright: 'Возрождение, прощение, призвание', reversed: 'Сомнения, незавершенность' },
  { id: 21, name: 'Мир', suit: 'major', upright: 'Завершение, успех, единство', reversed: 'Незавершенность, задержки' }
];

function getRandomCard() {
  return TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
}

function getRandomCards(count) {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function isReversed() {
  return Math.random() < 0.3;
}