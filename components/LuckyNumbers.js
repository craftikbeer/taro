function LuckyNumbers() {
  try {
    const [fullName, setFullName] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
    const [luckyNumbers, setLuckyNumbers] = React.useState(null);

    const calculateLuckyNumbers = () => {
      if (!fullName || !birthDate) return;
      
      const lifePath = calculateLifePath(birthDate);
      const nameNumber = calculateNameNumber(fullName);
      
      const date = new Date(birthDate);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      
      const numbers = {
        main: lifePath,
        personal: nameNumber,
        day: day,
        month: month,
        lucky1: (lifePath + nameNumber) % 9 || 9,
        lucky2: (day + month) % 9 || 9,
        lucky3: (year % 9) || 9,
        power: ((lifePath + nameNumber + day) % 9) || 9
      };
      
      setLuckyNumbers(numbers);
    };

    return (
      <section id="lucky" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-white" data-name="lucky-numbers" data-file="components/LuckyNumbers.js">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              СЧАСТЛИВЫЕ<br/>ЧИСЛА
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Узнайте ваши персональные счастливые числа
            </p>
          </div>

          <div className="space-y-px bg-black border-2 border-black mb-12">
            <div className="lebedev-card p-10">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Ваше полное имя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="lebedev-input w-full px-6 py-4 text-lg"
                />
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max="9999-12-31"
                  className="lebedev-input w-full px-6 py-4 text-lg"
                />
              </div>
            </div>
          </div>

          <button
            onClick={calculateLuckyNumbers}
            disabled={!fullName || !birthDate}
            className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50 mb-12"
          >
            Рассчитать счастливые числа
          </button>

          {luckyNumbers && (
            <div className="space-y-px bg-black border-2 border-black">
              <div className="lebedev-card p-12">
                <h4 className="text-3xl font-black mb-8 uppercase tracking-wide">Ваши счастливые числа</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black">
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.main}</div>
                    <p className="text-sm font-bold uppercase">Главное</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.personal}</div>
                    <p className="text-sm font-bold uppercase">Личное</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.lucky1}</div>
                    <p className="text-sm font-bold uppercase">Удача 1</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.lucky2}</div>
                    <p className="text-sm font-bold uppercase">Удача 2</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.lucky3}</div>
                    <p className="text-sm font-bold uppercase">Удача 3</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.power}</div>
                    <p className="text-sm font-bold uppercase">Сила</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.day}</div>
                    <p className="text-sm font-bold uppercase">День</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="text-5xl font-black text-[var(--primary-color)] mb-2">{luckyNumbers.month}</div>
                    <p className="text-sm font-bold uppercase">Месяц</p>
                  </div>
                </div>
              </div>
              <div className="lebedev-card p-8">
                <h4 className="text-xl font-black mb-6 uppercase">Поделиться</h4>
                <ShareButtons 
                  text={`Мои счастливые числа: ${luckyNumbers.main}, ${luckyNumbers.personal}, ${luckyNumbers.lucky1}`}
                  url={window.location.href}
                />
              </div>
              <div className="lebedev-card p-8">
                <h4 className="text-xl font-black mb-6 uppercase">Поделиться</h4>
                <ShareButtons 
                  text={`Мои счастливые числа: ${luckyNumbers.main}, ${luckyNumbers.personal}, ${luckyNumbers.lucky1}`}
                  url={window.location.href}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('LuckyNumbers component error:', error);
    return null;
  }
}