function CompatibilityCalculator() {
  try {
    const [person1Name, setPerson1Name] = React.useState('');
    const [person1Date, setPerson1Date] = React.useState('');
    const [person2Name, setPerson2Name] = React.useState('');
    const [person2Date, setPerson2Date] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [isCalculating, setIsCalculating] = React.useState(false);

    const handleCalculate = async () => {
      if (!person1Name || !person1Date || !person2Name || !person2Date) {
        return;
      }

      setIsCalculating(true);
      
      const numerologyScore = calculateCompatibility(person1Name, person1Date, person2Name, person2Date);
      setResult(numerologyScore);
      
      const aiAnalysis = await getGroqAnalysis(
        person1Name,
        person1Date,
        person2Name,
        person2Date,
        numerologyScore.score
      );
      
      if (aiAnalysis) {
        setResult({
          ...numerologyScore,
          aiAnalysis: aiAnalysis
        });
      }
      
      setIsCalculating(false);
    };

    return (
      <section id="calculator" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-white" data-name="compatibility-calculator" data-file="components/CompatibilityCalculator.js">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              КАЛЬКУЛЯТОР<br/>СОВМЕСТИМОСТИ
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Введите данные двух людей для расчета их нумерологической совместимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black mb-8 md:mb-10 lg:mb-12">
            <div className="lebedev-card p-6 md:p-8 lg:p-10">
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 md:mb-6 lg:mb-8 uppercase tracking-wide">Первый человек</h4>
              <input
                type="text"
                placeholder="Введите имя"
                value={person1Name}
                onChange={(e) => setPerson1Name(e.target.value)}
                className="lebedev-input w-full px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 text-base md:text-lg mb-4 md:mb-5 lg:mb-6"
              />
              <input
                type="date"
                value={person1Date}
                onChange={(e) => setPerson1Date(e.target.value)}
                max="9999-12-31"
                className="lebedev-input w-full px-6 py-4 text-lg"
              />
            </div>

            <div className="lebedev-card p-6 md:p-8 lg:p-10">
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 md:mb-6 lg:mb-8 uppercase tracking-wide">Второй человек</h4>
              <input
                type="text"
                placeholder="Введите имя"
                value={person2Name}
                onChange={(e) => setPerson2Name(e.target.value)}
                className="lebedev-input w-full px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 text-base md:text-lg mb-4 md:mb-5 lg:mb-6"
              />
              <input
                type="date"
                value={person2Date}
                onChange={(e) => setPerson2Date(e.target.value)}
                max="9999-12-31"
                className="lebedev-input w-full px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 text-base md:text-lg"
              />
            </div>
          </div>

          <div className="mb-12">
            <button
              onClick={handleCalculate}
              disabled={isCalculating || !person1Name || !person1Date || !person2Name || !person2Date}
              className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? 'Расчет...' : 'Рассчитать совместимость'}
            </button>
          </div>

          {result && (
            <div className="space-y-px bg-black border-2 border-black">
              <div className="lebedev-card p-8 md:p-12 lg:p-16 text-center">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-5 lg:mb-6 text-[var(--primary-color)]">{result.score}%</div>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide">{result.title}</h4>
                <p className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">{result.description}</p>
              </div>
              
              {result.aiAnalysis && (
                <div className="lebedev-card p-6 md:p-10 lg:p-12">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-black mb-5 md:mb-6 lg:mb-8 uppercase tracking-wide">
                    Детальный анализ
                  </h4>
                  <div className="text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-wrap">
                    {result.aiAnalysis}
                  </div>
                </div>
              )}
              
              <div className="lebedev-card p-8">
                <h4 className="text-xl font-black mb-6 uppercase">Поделиться результатом</h4>
                <ShareButtons 
                  text={`Наша совместимость: ${result.score}% - ${result.title}`}
                  url={window.location.href}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('CompatibilityCalculator component error:', error);
    return null;
  }
}
