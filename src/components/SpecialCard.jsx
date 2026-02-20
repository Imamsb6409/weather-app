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

export default SpecialCard;