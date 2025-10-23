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
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              ЧТО ТАКОЕ<br/>НУМЕРОЛОГИЯ?
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Древняя наука о числах, которая помогает понять скрытые закономерности жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black">
            {features.map((feature, index) => (
              <div key={index} className="lebedev-card p-6 md:p-10 lg:p-12">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-5 lg:mb-6 text-[var(--primary-color)]">{feature.number}</div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-wide">{feature.title}</h4>
                <p className="text-base md:text-lg leading-relaxed">{feature.description}</p>
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
