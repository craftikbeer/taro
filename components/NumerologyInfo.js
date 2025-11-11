function NumerologyInfo() {
  try {
    const features = [
      {
        number: '01',
        title: 'Число судьбы',
        description: 'Раскрывает вашу жизненную миссию и предназначение'
      },
      {
        number: '02',
        title: 'Совместимость',
        description: 'Определяет гармонию между двумя людьми'
      },
      {
        number: '03',
        title: 'Персональный год',
        description: 'Показывает энергию текущего периода жизни'
      },
      {
        number: '04',
        title: 'Число имени',
        description: 'Отражает вашу личность и характер'
      }
    ];

    return (
      <section id="about" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-white" data-name="numerology-info" data-file="components/NumerologyInfo.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h3 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Что такое нумерология?
            </h3>
            <p className="text-lg md:text-xl max-w-2xl text-[var(--text-secondary)]">
              Древняя наука о числах, которая помогает понять скрытые закономерности жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black">
            {features.map((feature, index) => (
              <div key={index} className="lebedev-card p-8 md:p-10">
                <div className="text-5xl font-black mb-4 text-[var(--primary-color)]">{feature.number}</div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">{feature.title}</h4>
                <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('NumerologyInfo component error:', error);
    return null;
  }
}
