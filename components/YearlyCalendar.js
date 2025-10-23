function YearlyCalendar() {
  try {
    const [birthDate, setBirthDate] = React.useState('');
    const [yearData, setYearData] = React.useState(null);

    const calculateYearlyCalendar = () => {
      if (!birthDate) return;
      
      const currentYear = 2025;
      const lifePath = calculateLifePath(birthDate);
      const personalYear = calculatePersonalYear(birthDate, currentYear);
      
      const months = [];
      const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      
      for (let month = 1; month <= 12; month++) {
        const personalMonth = ((personalYear + month - 1) % 9) || 9;
        months.push({
          name: monthNames[month - 1],
          number: personalMonth,
          energy: getMonthEnergy(personalMonth)
        });
      }
      
      setYearData({
        year: currentYear,
        personalYear,
        lifePath,
        months
      });
    };

    const calculatePersonalYear = (dateString, year) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      let sum = day + month + year;
      while (sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
      }
      return sum;
    };

    const getMonthEnergy = (num) => {
      const energies = {
        1: 'Начало, новые старты',
        2: 'Партнёрство, баланс',
        3: 'Творчество, общение',
        4: 'Работа, стабильность',
        5: 'Перемены, свобода',
        6: 'Семья, ответственность',
        7: 'Духовность, анализ',
        8: 'Финансы, достижения',
        9: 'Завершение, мудрость'
      };
      return energies[num] || '';
    };

    return (
      <section id="calendar" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-[#F5F5F5]" data-name="yearly-calendar" data-file="components/YearlyCalendar.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              КАЛЕНДАРЬ<br/>НА 2025 ГОД
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Узнайте энергетику каждого месяца для вас
            </p>
          </div>

          <div className="lebedev-card p-10 mb-12">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max="9999-12-31"
              className="lebedev-input w-full px-6 py-4 text-lg mb-6"
            />
            <button
              onClick={calculateYearlyCalendar}
              disabled={!birthDate}
              className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50"
            >
              Рассчитать календарь
            </button>
          </div>

          {yearData && (
            <div className="space-y-px bg-black border-2 border-black">
              <div className="lebedev-card p-12 text-center">
                <h4 className="text-5xl font-black mb-4">ВАШ {yearData.year} ГОД</h4>
                <p className="text-3xl mb-2">Личный год: <span className="text-[var(--primary-color)] font-black">{yearData.personalYear}</span></p>
                <p className="text-xl text-[var(--text-secondary)]">Число жизненного пути: {yearData.lifePath}</p>
              </div>
              
              <div className="lebedev-card p-8">
                <div className="grid md:grid-cols-3 gap-px bg-black">
                  {yearData.months.map((month, index) => (
                    <div key={index} className="bg-white p-6">
                      <div className="text-3xl font-black text-[var(--primary-color)] mb-2">{month.number}</div>
                      <h5 className="text-lg font-bold mb-2 uppercase">{month.name}</h5>
                      <p className="text-sm">{month.energy}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lebedev-card p-8">
                <h4 className="text-xl font-black mb-6 uppercase">Поделиться календарём</h4>
                <ShareButtons 
                  text={`Мой нумерологический календарь на ${yearData.year} год`}
                  url={window.location.href}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('YearlyCalendar component error:', error);
    return null;
  }
}