function TarotSection() {
  try {
    const [activeTab, setActiveTab] = React.useState('daily');
    const [question, setQuestion] = React.useState('');
    const [reading, setReading] = React.useState(null);
    const [isReading, setIsReading] = React.useState(false);

    const handleReading = async (type) => {
      setIsReading(true);
      setReading(null);
      
      let cards = [];
      if (type === 'daily') {
        const card = getRandomCard();
        card.reversed = isReversed();
        cards = [card];
      } else if (type === 'three') {
        cards = getRandomCards(3).map(c => ({ ...c, reversed: isReversed() }));
      } else if (type === 'celtic') {
        cards = getRandomCards(10).map(c => ({ ...c, reversed: isReversed() }));
      } else if (type === 'compatibility') {
        cards = getRandomCards(3).map(c => ({ ...c, reversed: isReversed() }));
      }
      
      const interpretation = await getTarotReading(type, cards, question);
      
      setReading({ cards, interpretation, type });
      setIsReading(false);
    };

    const tabs = [
      { id: 'daily', name: 'Карта дня', icon: 'calendar' },
      { id: 'three', name: '3 карты', icon: 'layers' },
      { id: 'celtic', name: 'Кельтский крест', icon: 'grid-3x3' },
      { id: 'compatibility', name: 'Совместимость', icon: 'heart' }
    ];

    return (
      <section id="tarot" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-white" data-name="tarot-section" data-file="components/TarotSection.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-5 lg:mb-6 leading-tight">
              ТАРО<br/>РАСКЛАДЫ
            </h3>
            <p className="text-base md:text-2xl max-w-2xl">
              Получите ответы на вопросы через древнюю мудрость карт
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-2 border-black mb-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setReading(null); }}
                className={`p-6 md:p-8 font-bold text-sm md:text-base uppercase tracking-wide transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-[var(--primary-color)] text-white' 
                    : 'bg-white text-black hover:bg-[#F5F5F5]'
                }`}
              >
                <div className={`icon-${tab.icon} text-2xl md:text-3xl mb-2`}></div>
                {tab.name}
              </button>
            ))}
          </div>

          {activeTab === 'daily' && <DailyCard onRead={handleReading} isReading={isReading} reading={reading} />}
          {activeTab === 'three' && <ThreeCardSpread onRead={handleReading} isReading={isReading} reading={reading} question={question} setQuestion={setQuestion} />}
          {activeTab === 'celtic' && <CelticCross onRead={handleReading} isReading={isReading} reading={reading} question={question} setQuestion={setQuestion} />}
          {activeTab === 'compatibility' && <CompatibilitySpread onRead={handleReading} isReading={isReading} reading={reading} />}
        </div>
      </section>
    );
  } catch (error) {
    console.error('TarotSection component error:', error);
    return null;
  }
}

function DailyCard({ onRead, isReading, reading }) {
  return (
    <div className="space-y-px bg-black border-2 border-black">
      <div className="lebedev-card p-10">
        <h4 className="text-2xl font-bold mb-6 uppercase">Ваша карта на сегодня</h4>
        <p className="text-lg mb-8">Узнайте, какую энергию несет для вас этот день</p>
        <button
          onClick={() => onRead('daily')}
          disabled={isReading}
          className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50"
        >
          {isReading ? 'Гадаем...' : 'Вытянуть карту'}
        </button>
      </div>
      {reading && <ReadingResult reading={reading} />}
    </div>
  );
}

function ThreeCardSpread({ onRead, isReading, reading, question, setQuestion }) {
  return (
    <div className="space-y-px bg-black border-2 border-black">
      <div className="lebedev-card p-10">
        <h4 className="text-2xl font-bold mb-6 uppercase">Расклад на 3 карты</h4>
        <p className="text-lg mb-6">Прошлое / Настоящее / Будущее</p>
        <input
          type="text"
          placeholder="Ваш вопрос (необязательно)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="lebedev-input w-full px-6 py-4 text-lg mb-6"
        />
        <button
          onClick={() => onRead('three')}
          disabled={isReading}
          className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50"
        >
          {isReading ? 'Раскладываем...' : 'Сделать расклад'}
        </button>
      </div>
      {reading && <ReadingResult reading={reading} />}
    </div>
  );
}

function CelticCross({ onRead, isReading, reading, question, setQuestion }) {
  return (
    <div className="space-y-px bg-black border-2 border-black">
      <div className="lebedev-card p-10">
        <h4 className="text-2xl font-bold mb-6 uppercase">Кельтский крест</h4>
        <p className="text-lg mb-6">Глубокий расклад на 10 карт для детального анализа ситуации</p>
        <input
          type="text"
          placeholder="Ваш вопрос"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="lebedev-input w-full px-6 py-4 text-lg mb-6"
        />
        <button
          onClick={() => onRead('celtic')}
          disabled={isReading}
          className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50"
        >
          {isReading ? 'Раскладываем...' : 'Сделать расклад'}
        </button>
      </div>
      {reading && <ReadingResult reading={reading} />}
    </div>
  );
}

function CompatibilitySpread({ onRead, isReading, reading }) {
  return (
    <div className="space-y-px bg-black border-2 border-black">
      <div className="lebedev-card p-10">
        <h4 className="text-2xl font-bold mb-6 uppercase">Совместимость на картах</h4>
        <p className="text-lg mb-8">Узнайте, что карты говорят о ваших отношениях</p>
        <button
          onClick={() => onRead('compatibility')}
          disabled={isReading}
          className="w-full px-12 py-6 bg-[var(--primary-color)] text-white font-bold text-xl uppercase tracking-wide hover:bg-black transition-colors disabled:opacity-50"
        >
          {isReading ? 'Гадаем...' : 'Узнать совместимость'}
        </button>
      </div>
      {reading && <ReadingResult reading={reading} />}
    </div>
  );
}

function ReadingResult({ reading }) {
  const { cards, interpretation, type } = reading;
  
  const getPositionName = (index, type) => {
    if (type === 'three') return ['Прошлое', 'Настоящее', 'Будущее'][index];
    if (type === 'compatibility') return ['Первый человек', 'Второй человек', 'Отношения'][index];
    if (type === 'celtic') {
      return ['Ситуация', 'Препятствие', 'Основа', 'Прошлое', 'Возможное будущее', 
              'Ближайшее', 'Вы', 'Окружение', 'Надежды/Страхи', 'Итог'][index];
    }
    return '';
  };

  return (
    <>
      <div className="lebedev-card p-10">
        <h4 className="text-2xl font-bold mb-8 uppercase">Выпавшие карты</h4>
        <div className={`grid gap-6 ${type === 'celtic' ? 'md:grid-cols-5' : type === 'daily' ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
          {cards.map((card, index) => (
            <div key={index} className="bg-[#F5F5F5] p-6 border-2 border-black">
              <div className="text-sm font-bold mb-2 uppercase text-[var(--text-secondary)]">
                {getPositionName(index, type)}
              </div>
              <div className="text-xl font-black mb-2">{card.name}</div>
              <div className={`text-sm mb-2 font-bold ${card.reversed ? 'text-[var(--primary-color)]' : 'text-black'}`}>
                {card.reversed ? '↓ Перевернутая' : '↑ Прямая'}
              </div>
              <p className="text-sm">{card.reversed ? card.reversed : card.upright}</p>
            </div>
          ))}
        </div>
      </div>
      
      {interpretation && (
        <div className="lebedev-card p-10">
          <h4 className="text-2xl font-bold mb-6 uppercase">Толкование</h4>
          <div className="text-lg leading-relaxed whitespace-pre-wrap">{interpretation}</div>
        </div>
      )}
      
      <div className="lebedev-card p-8">
        <h4 className="text-xl font-black mb-6 uppercase">Поделиться раскладом</h4>
        <ShareButtons 
          text={`Мой расклад Таро: ${cards[0].name}`}
          url={window.location.href}
        />
      </div>
    </>
  );
}