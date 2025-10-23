function ShareButtons({ text, url }) {
  try {
    const shareUrl = url || window.location.href;
    const shareText = text || 'Проверьте свою нумерологию на Магия Чисел';
    const fullText = `${shareText}\n\n${shareUrl}`;
    
    const handleShare = (platform) => {
      let shareLink = '';
      
      switch(platform) {
        case 'vk':
          shareLink = `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
          break;
        case 'telegram':
          shareLink = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
          break;
        case 'whatsapp':
          shareLink = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
          break;
        case 'instagram':
          navigator.clipboard.writeText(fullText).then(() => {
            alert('Текст и ссылка скопированы!\nОткройте Instagram и вставьте в пост или Stories');
          }).catch(() => {
            alert('Не удалось скопировать. Скопируйте вручную:\n\n' + fullText);
          });
          return;
        case 'threads':
          shareLink = `https://threads.net/intent/post?text=${encodeURIComponent(fullText)}`;
          break;
        case 'copy':
          navigator.clipboard.writeText(fullText).then(() => {
            alert('Ссылка скопирована в буфер обмена!');
          }).catch(() => {
            alert('Не удалось скопировать. Скопируйте вручную:\n\n' + fullText);
          });
          return;
      }
      
      if (shareLink) {
        window.open(shareLink, '_blank', 'width=600,height=400');
      }
    };
    
    return (
      <div className="flex flex-wrap gap-3" data-name="share-buttons" data-file="components/ShareButtons.js">
        <button
          onClick={() => handleShare('vk')}
          className="px-5 py-3 bg-[#0077FF] text-white font-bold text-sm uppercase tracking-wide hover:bg-black transition-colors flex items-center gap-2"
        >
          <div className="icon-share-2 text-base"></div>
          VK
        </button>
        
        <button
          onClick={() => handleShare('telegram')}
          className="px-5 py-3 bg-[#0088CC] text-white font-bold text-sm uppercase tracking-wide hover:bg-black transition-colors flex items-center gap-2"
        >
          <div className="icon-send text-base"></div>
          Telegram
        </button>
        
        <button
          onClick={() => handleShare('whatsapp')}
          className="px-5 py-3 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wide hover:bg-black transition-colors flex items-center gap-2"
        >
          <div className="icon-message-circle text-base"></div>
          WhatsApp
        </button>
        
        <button
          onClick={() => handleShare('instagram')}
          className="px-5 py-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-sm uppercase tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <div className="icon-instagram text-base"></div>
          Instagram
        </button>
        
        <button
          onClick={() => handleShare('threads')}
          className="px-5 py-3 bg-black text-white font-bold text-sm uppercase tracking-wide hover:bg-[#333] transition-colors flex items-center gap-2"
        >
          <div className="icon-at-sign text-base"></div>
          Threads
        </button>
        
        <button
          onClick={() => handleShare('copy')}
          className="px-5 py-3 border-2 border-black text-black font-bold text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors flex items-center gap-2"
        >
          <div className="icon-link text-base"></div>
          Копировать ссылку
        </button>
      </div>
    );
  } catch (error) {
    console.error('ShareButtons component error:', error);
    return null;
  }
}
