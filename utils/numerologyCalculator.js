function calculateLifePath(dateString) {
  const date = new Date(dateString);
  let sum = date.getDate() + (date.getMonth() + 1) + date.getFullYear();
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  return sum;
}

function calculateNameNumber(name) {
  const letterValues = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 6, 'ж': 7, 'з': 8, 'и': 9,
    'й': 1, 'к': 2, 'л': 3, 'м': 4, 'н': 5, 'о': 6, 'п': 7, 'р': 8, 'с': 9,
    'т': 1, 'у': 2, 'ф': 3, 'х': 4, 'ц': 5, 'ч': 6, 'ш': 7, 'щ': 8, 'ъ': 9,
    'ы': 1, 'ь': 2, 'э': 3, 'ю': 4, 'я': 5
  };
  
  let sum = 0;
  const cleanName = name.toLowerCase().replace(/[^а-яё]/g, '');
  
  for (let char of cleanName) {
    sum += letterValues[char] || 0;
  }
  
  while (sum > 9) {
    sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  return sum;
}

function calculateCompatibility(name1, date1, name2, date2) {
  const lifePath1 = calculateLifePath(date1);
  const lifePath2 = calculateLifePath(date2);
  const nameNumber1 = calculateNameNumber(name1);
  const nameNumber2 = calculateNameNumber(name2);
  
  const difference = Math.abs(lifePath1 - lifePath2);
  const nameCompatibility = Math.abs(nameNumber1 - nameNumber2);
  
  let baseScore = 100 - (difference * 10) - (nameCompatibility * 5);
  baseScore = Math.max(40, Math.min(100, baseScore));
  
  let title = '';
  let description = '';
  
  if (baseScore >= 90) {
    title = 'Идеальная пара';
    description = 'Ваши числа в совершенной гармонии. Это редкая и волшебная совместимость!';
  } else if (baseScore >= 75) {
    title = 'Отличная совместимость';
    description = 'Вы прекрасно дополняете друг друга. Ваши энергии находятся в балансе.';
  } else if (baseScore >= 60) {
    title = 'Хорошая совместимость';
    description = 'У вас есть потенциал для гармоничных отношений с взаимным пониманием.';
  } else if (baseScore >= 45) {
    title = 'Средняя совместимость';
    description = 'Вам потребуется работать над отношениями, но есть хорошие перспективы.';
  } else {
    title = 'Сложная совместимость';
    description = 'Ваши энергии очень разные, но это может стать источником роста для обоих.';
  }
  
  return {
    score: Math.round(baseScore),
    title,
    description
  };
}