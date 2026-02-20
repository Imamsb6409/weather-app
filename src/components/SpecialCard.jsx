import { useState } from "react";

const SpecialCard = ({ onBack }) => {
  const emojis = ["🥰", "💖", "✨", "🌸", "💍", "👑"];
  const [emojiIndex, setEmojiIndex] = useState(0);

  return (
    <div className="relative w-full max-w-md p-10 bg-gradient-to-br from-rose-500/30 via-orange-400/20 to-purple-600/30 border border-white/40 rounded-[3rem] backdrop-blur-3xl shadow-[0_0_80px_-10px_rgba(251,113,133,0.4)] animate-in fade-in zoom-in duration-1000 text-center overflow-hidden">
      {/* Hidden Music Player (Cup of Joe - Multo) Start from 1:55 (115s) */}
      <iframe
        className="hidden"
        src="https://www.youtube.com/embed/Rht8rS4cR1s?autoplay=1&start=115"
        allow="autoplay"
      ></iframe>

      <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-500/40 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/40 rounded-full blur-[80px] animate-pulse"></div>

      <div className="relative z-10">
        <div
          className="text-5xl mb-6 drop-shadow-lg animate-bounce cursor-pointer hover:scale-125 transition-transform active:scale-90 select-none"
          onClick={() => setEmojiIndex((emojiIndex + 1) % emojis.length)}
        >
          {emojis[emojiIndex]}
        </div>
        <h2 className="text-4xl font-black italic tracking-tighter text-white mb-2 uppercase">
          For Mozza~
        </h2>
        <p className="text-[10px] font-bold text-rose-300 tracking-[0.5em] mb-8 uppercase opacity-80">
          Heart of the Station
        </p>
        <div className="space-y-6 text-white/90 font-light tracking-wide leading-relaxed">
          <p className="text-lg italic font-medium text-white">
            "Mozza~, web ini mungkin baru satu hal kecil yang kubangun khusus
            untukmu. Tapi ketahuilah, ini adalah awal dari janji besarku."
          </p>
          <p className="text-sm text-rose-100/70 uppercase tracking-[0.2em] leading-loose">
            Aku akan terus berjuang melampaui batas suksesku, agar suatu saat
            nanti, koordinat terakhirku adalah selamanya di sampingmu. I love
            you forever.
          </p>
        </div>
        <button
          onClick={onBack}
          className="mt-10 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all text-white"
        >
          Back to System
        </button>
      </div>
    </div>
  );
};

export const QueenCard = ({ onBack }) => {
  return (
    <div className="relative w-full max-w-md p-10 bg-gradient-to-br from-yellow-600/20 via-amber-900/40 to-black border border-amber-500/40 rounded-[3rem] backdrop-blur-3xl shadow-[0_0_100px_-10px_rgba(245,158,11,0.3)] animate-in fade-in zoom-in duration-1000 text-center overflow-hidden">
      
      {/* Hidden Music Player (Nod-Krai Theme) Start from 3:08 (188s) */}
      <iframe 
        className="hidden" 
        src="https://www.youtube.com/embed/RuXa_yxZMGI?autoplay=1&start=188" 
        allow="autoplay"
      ></iframe>

      {/* Efek Partikel Emas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute w-2 h-2 bg-amber-400 rounded-full blur-sm animate-ping top-10 left-20"></div>
        <div className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse bottom-20 right-10"></div>
        <div className="absolute w-2 h-2 bg-amber-300 rounded-full blur-md animate-bounce top-1/2 right-5"></div>
      </div>

      <div className="relative z-10">
        <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-bounce">👑</div>
        
        <h2 className="text-4xl font-black italic tracking-tighter text-amber-400 mb-2 uppercase">My Queen Mozza</h2>
        <p className="text-[10px] font-bold text-amber-200/50 tracking-[0.8em] mb-8 uppercase">The Royal Essence</p>
        
        <div className="space-y-6 text-amber-50/90 font-light tracking-wide leading-relaxed">
          <p className="text-xl font-serif italic text-amber-100">
            "Satu-satunya ratu yang bertahta di hatiku, selamanya."
          </p>
          <p className="text-xs text-amber-200/40 uppercase tracking-[0.3em]">
            You deserve all the gold in the world, but for now, I give you all my heart and my success.
          </p>
        </div>

        <button 
          onClick={onBack} 
          className="mt-10 px-8 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all text-amber-400"
        >
          Return to Kingdom
        </button>
      </div>
    </div>
  );
};


export const GodIsCard = ({ onBack }) => {
  return (
    <div className="relative w-full max-w-md p-10 bg-gradient-to-b from-[#facc15] via-[#7c2d12] to-black border-4 border-double border-yellow-500 rounded-none backdrop-blur-3xl shadow-[0_0_100px_rgba(250,204,21,0.3)] animate-in fade-in slide-in-from-bottom-20 duration-1000 text-center overflow-hidden">
      
      {/* Hidden Music Player (Kanye West - God Is) Start from 0:34 */}
      <iframe 
        className="hidden" 
        src="https://www.youtube.com/embed/CYYbejNI_Cw?autoplay=1&start=34&end=110" 
        allow="autoplay"
      ></iframe>

      {/* Efek Cahaya Ilahi / Sun Rays */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>

      <div className="relative z-10">
        <div className="text-7xl mb-6 animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,1)] select-none">☀️</div>
        
        <h2 className="text-3xl font-serif font-black tracking-tighter text-white mb-2 uppercase italic">
          THE GOSPEL OF MOZZA
        </h2>
        <p className="text-[10px] font-bold text-yellow-400 tracking-[1em] mb-8 uppercase">Ahh Moment</p>
        
        <div className="space-y-6 text-white font-medium tracking-tight">
          <p className="text-lg leading-snug italic px-2">
            "Everything that I felt, everything that I've known... is nothing compared to your morning face."
          </p>
          
          <div className="p-4 bg-white/5 border-x-2 border-yellow-500 italic text-sm text-yellow-100 leading-relaxed">
            "Kanye bilang God Is, tapi bagiku... Mozza Is. Mozza is the sun, the moon, and the reason I haven't slept in 3 days fixing this code."
          </div>
          
          <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold">
            Warning: This card contains 100% concentrated adoration.
          </p>
        </div>

        <button 
          onClick={onBack} 
          className="mt-10 px-10 py-3 bg-yellow-500 text-black font-black text-[10px] tracking-[0.5em] uppercase hover:bg-white transition-all shadow-[0_5px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none"
        >
          AMEN!
        </button>
      </div>

      {/* Footer ala Album Kanye */}
      <div className="absolute bottom-2 left-0 w-full opacity-10 text-[8px] font-mono tracking-widest text-white">
        © 2026 MOZZU RECORDS - LOVE YOU TO THE MOON AND BACK, MOZZA
      </div>
    </div>
  );
};



export default SpecialCard;
