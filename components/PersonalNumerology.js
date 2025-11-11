function PersonalNumerology() {
  try {
    const [fullName, setFullName] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [birthPlace, setBirthPlace] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [fullAnalysis, setFullAnalysis] = React.useState(null);
    const [isCalculating, setIsCalculating] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [emailSent, setEmailSent] = React.useState(false);

    const handleCalculate = async () => {
      if (!fullName || !birthDate || !gender) return;
      setIsCalculating(true);
      setEmailSent(false);
      const analysis = await getPersonalAnalysis(fullName, birthDate, gender, birthPlace);
      if (analysis) {
        setResult(analysis);
        setFullAnalysis(analysis);
      }
      setIsCalculating(false);
    };

    const handleSendEmail = async () => {
      if (!email || !fullAnalysis) return;
      setIsSending(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEmailSent(true);
      setIsSending(false);
    };

    return (
      <section id="personal" className="py-12 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-[#F5F5F5]" data-name="personal-numerology" data-file="components/PersonalNumerology.js">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h3 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Личный расчёт
            </h3>
            <p className="text-lg md:text-xl max-w-2xl text-[var(--text-secondary)]">
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
              className="btn-primary w-full px-12 py-5 font-bold text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? 'Расчет...' : 'Получить анализ'}
            </button>
          </div>

          {result && (
            <div className="space-y-px bg-black border-2 border-black">
              <div className="lebedev-card p-12">
                <h4 className="text-3xl font-black mb-8 uppercase tracking-wide">Полный нумерологический анализ</h4>
                <div className="text-lg leading-relaxed whitespace-pre-wrap mb-8">{result}</div>
                <div className="pt-8 border-t-2 border-[var(--border-light)]">
                  <p className="text-xl mb-6 font-medium">Получите полный анализ на email</p>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="lebedev-input flex-1 px-6 py-4 text-lg"
                    />
                    <button
                      onClick={handleSendEmail}
                      disabled={isSending || !email}
                      className="btn-primary px-10 py-4 font-bold text-base tracking-wide disabled:opacity-50"
                    >
                      {isSending ? 'Отправка...' : 'Отправить'}
                    </button>
                  </div>
                </div>
              </div>
              
              {emailSent && (
                <div className="lebedev-card p-8 bg-white">
                  <div className="border-2 border-black p-8">
                    <h4 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                      ✓ Анализ отправлен
                    </h4>
                    <p className="text-lg mb-6">
                      Полный анализ отправлен на <strong>{email}</strong>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 pt-6 border-t-2 border-[var(--border-light)]">
                      <div className="p-4 bg-[#F5F5F5]">
                        <div className="text-sm text-[var(--text-secondary)] font-medium mb-1 uppercase">Имя</div>
                        <div className="font-bold">{fullName}</div>
                      </div>
                      <div className="p-4 bg-[#F5F5F5]">
                        <div className="text-sm text-[var(--text-secondary)] font-medium mb-1 uppercase">Дата</div>
                        <div className="font-bold">{birthDate}</div>
                      </div>
                      <div className="p-4 bg-[#F5F5F5]">
                        <div className="text-sm text-[var(--text-secondary)] font-medium mb-1 uppercase">Пол</div>
                        <div className="font-bold">{gender === 'male' ? 'Мужской' : 'Женский'}</div>
                      </div>
                      {birthPlace && (
                        <div className="p-4 bg-[#F5F5F5]">
                          <div className="text-sm text-[var(--text-secondary)] font-medium mb-1 uppercase">Место</div>
                          <div className="font-bold">{birthPlace}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
