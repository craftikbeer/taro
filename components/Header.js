function Header() {
  try {
    return (
      <header className="border-b-2 border-black bg-white" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-3xl font-bold">МАГИЯ ЧИСЕЛ</h1>
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <a href="#personal" className="text-sm lg:text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                Личный расчет
              </a>
              <a href="#calculator" className="text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                Совместимость
              </a>
              <a href="#lucky" className="text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                Счастливые числа
              </a>
              <a href="#calendar" className="text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                Календарь
              </a>
              <a href="#tarot" className="text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                Таро
              </a>
              <a href="#about" className="text-base hover:text-[var(--primary-color)] font-medium uppercase tracking-wide">
                О нумерологии
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
