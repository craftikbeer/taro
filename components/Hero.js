function Hero() {
  try {
    return (
      <section className="pt-12 md:pt-24 lg:pt-32 pb-12 md:pb-24 lg:pb-32 px-6 md:px-8 lg:px-12 bg-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black mb-8 md:mb-12 lg:mb-16 leading-[1.2] md:leading-[1] lg:leading-[0.9] tracking-tighter">
              РАСКРОЙТЕ<br/>ТАЙНЫ<br/>ВАШЕЙ<br/><span className="text-[var(--primary-color)]">СУДЬБЫ</span>
            </h2>
            
            <p className="text-lg md:text-3xl mb-12 md:mb-20 max-w-3xl font-normal leading-relaxed md:leading-tight">
              Нумерологическая система для тех, кто ценит точность и глубину познания
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-20 lg:mb-24">
              <button 
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 md:px-10 lg:px-12 py-4 md:py-5 bg-[var(--primary-color)] text-white font-bold text-base md:text-lg uppercase tracking-wide hover:bg-black transition-colors"
              >
                Узнать совместимость
              </button>
              
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 md:px-10 lg:px-12 py-4 md:py-5 border-2 border-black text-black font-bold text-base md:text-lg uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
              >
                Подробнее
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
            <div className="bg-white p-6 md:p-12">
              <h3 className="text-4xl md:text-6xl font-black mb-2 md:mb-4">100K+</h3>
              <p className="text-sm md:text-xl font-medium uppercase tracking-wide">Довольных клиентов</p>
            </div>
            
            <div className="bg-white p-6 md:p-12">
              <h3 className="text-4xl md:text-6xl font-black mb-2 md:mb-4">98%</h3>
              <p className="text-sm md:text-xl font-medium uppercase tracking-wide">Точность расчётов</p>
            </div>
            
            <div className="bg-white p-6 md:p-12">
              <h3 className="text-4xl md:text-6xl font-black mb-2 md:mb-4">15+</h3>
              <p className="text-sm md:text-xl font-medium uppercase tracking-wide">Лет опыта</p>
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
