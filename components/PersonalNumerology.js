function PersonalNumerology() {
  try {
    const [fullName, setFullName] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [birthPlace, setBirthPlace] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [fullAnalysis, setFullAnalysis] = React.useState(null);
    const [isCalculating, setIsCalculating] = React.useState(false);

    const handleCalculate = async () => {
      if (!fullName || !birthDate || !gender) return;
      setIsCalculating(true);
      const analysis = await getPersonalAnalysis(fullName, birthDate, gender, birthPlace);
      if (analysis) {
        const lines = analysis.split('\n');
        const preview = lines.slice(0, 15).join('\n') + '\n\n...';
        setResult(preview);
        setFullAnalysis(analysis);
      }
      setIsCalculating(false);
    };

    return (
      <section id="personal" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-[#F5F5F5]" data-name="personal-numerology" data-file="components/PersonalNumerology.js">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              ЛИЧНЫЙ<br/>РАСЧЁТ
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Получите полный нумерологический анализ личности
            </p>
          </div>

          <div className="space-y-px bg-black border-2 border-black mb-12">
            <div className="lebedev-card p-10">
              <h4 className="text-2xl font-bold mb-8 uppercase tracking-wide">Ваши данные</h4>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Полное имя"
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
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="lebedev-input w-full px-6 py-4 text-lg"
                >
                  <option value="">Выберите пол</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
                <input
                  type="text"
                  placeholder="Место рождения (необязательно)"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  className="lebedev-input w-full px-6 py-4 text-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <button
              onClick={handleCalculate}
              disabled={isCalculating || !fullName || !birthDate || !gender}
              className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? 'Расчет...' : 'Получить анализ'}
            </button>
          </div>

          {result && (
            <div className="space-y-px bg-black border-2 border-black">
              <div className="lebedev-card p-12">
                <h4 className="text-3xl font-black mb-8 uppercase tracking-wide">Предпросмотр анализа</h4>
                <div className="text-lg leading-relaxed whitespace-pre-wrap mb-8">{result}</div>
                <div className="pt-8 border-t-2 border-[var(--border-light)]">
                  <div className="bg-[#F5F5F5] p-8 border-2 border-black">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">🐻</div>
                      <h5 className="text-2xl font-black uppercase">Винни-Пух отдыхает</h5>
                    </div>
                    <p className="text-lg mb-6">Для получения полного нумерологического анализа напишите нам в Telegram</p>
                    <a 
                      href="https://t.me/neurocraftsru" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 bg-[#0088CC] text-white font-bold text-lg uppercase tracking-wide hover:bg-black transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="icon-send text-xl"></div>
                        Написать в Telegram
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lebedev-card p-8">
                <h4 className="text-xl font-black mb-6 uppercase">Поделиться</h4>
                <ShareButtons 
                  text={`Мой нумерологический анализ на Магия Чисел`}
                  url={window.location.href}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('PersonalNumerology component error:', error);
    return null;
  }
}
