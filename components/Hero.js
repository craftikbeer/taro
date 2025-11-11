function Hero() {
  try {
    return (
      <section className="pt-20 md:pt-28 pb-20 md:pb-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-white via-[#FEF3F2] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
              Раскройте тайны<br/>вашей <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">судьбы</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
              Профессиональная нумерология: расчёт чисел судьбы, совместимости и персональных прогнозов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-10 py-4 font-bold text-base tracking-wide"
              >
                Узнать совместимость
              </button>
              
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary px-10 py-4 font-bold text-base tracking-wide"
              >
                Подробнее
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="lebedev-card p-10 text-center">
              <h3 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">12</h3>
              <p className="text-lg font-semibold text-[var(--text-secondary)]">чисел в полном анализе</p>
            </div>
            
            <div className="lebedev-card p-10 text-center">
              <h3 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">3</h3>
              <p className="text-lg font-semibold text-[var(--text-secondary)]">нумерологические системы</p>
            </div>
            
            <div className="lebedev-card p-10 text-center">
              <h3 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">AI</h3>
              <p className="text-lg font-semibold text-[var(--text-secondary)]">анализ от нейросети</p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
