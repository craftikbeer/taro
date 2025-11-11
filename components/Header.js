function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <div className="h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--accent-color)] to-[var(--primary-color)]"></div>
        
        <div className="bg-white/95 backdrop-blur-sm border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center">
                  <div className="icon-sparkles text-xl text-white"></div>
                </div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                  Магия чисел
                </h1>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a 
                  href="#personal" 
                  className="nav-link text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-color)] relative group"
                >
                  Личный расчет
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#calculator" 
                  className="nav-link text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-color)] relative group"
                >
                  Совместимость
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#lucky" 
                  className="nav-link text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-color)] relative group"
                >
                  Счастливые числа
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#calendar" 
                  className="nav-link text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-color)] relative group"
                >
                  Календарь
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#about" 
                  className="nav-link text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-color)] relative group"
                >
                  О нумерологии
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}