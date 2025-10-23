function Footer() {
  try {
    return (
      <footer className="py-10 md:py-14 lg:py-16 px-6 md:px-8 lg:px-12 border-t-2 border-black bg-white" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-5 lg:mb-6">МАГИЯ ЧИСЕЛ</h2>
              <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] mb-4 md:mb-5 lg:mb-6">
                Откройте тайны нумерологии и узнайте свою судьбу
              </p>
            </div>
            <div className="flex items-end justify-end">
              <nav className="space-y-2 md:space-y-3 text-right">
                <a href="#personal" className="block text-sm md:text-base lg:text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  Личный расчет
                </a>
                <a href="#calculator" className="block text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  Совместимость
                </a>
                <a href="#lucky" className="block text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  Счастливые числа
                </a>
                <a href="#calendar" className="block text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  Календарь
                </a>
                <a href="#tarot" className="block text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  Таро
                </a>
                <a href="#about" className="block text-lg hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                  О нумерологии
                </a>
              </nav>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-[var(--border-light)]">
            <p className="text-[var(--text-secondary)] text-lg">
              © 2025 Магия Чисел. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
