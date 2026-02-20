export default function QueenCard({ onBack }) {
  return (
    <div className="relative w-full max-w-md p-10 bg-linear-to-br from-yellow-600/20 via-amber-900/40 to-black border border-amber-500/40 rounded-[3rem] backdrop-blur-3xl shadow-[0_0_100px_-10px_rgba(245,158,11,0.3)] animate-in fade-in zoom-in duration-1000 text-center overflow-hidden">
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
        <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-bounce">
          👑
        </div>

        <h2 className="text-4xl font-black italic tracking-tighter text-amber-400 mb-2 uppercase">
          My Queen
        </h2>
        <p className="text-[10px] font-bold text-amber-200/50 tracking-[0.8em] mb-8 uppercase">
          The Royal Essence
        </p>

        <div className="space-y-6 text-amber-50/90 font-light tracking-wide leading-relaxed">
          <p className="text-xl font-serif italic text-amber-100">
            "Satu-satunya ratu yang bertahta di hatiku, selamanya."
          </p>
          <p className="text-xs text-amber-200/40 uppercase tracking-[0.3em]">
            You deserve all the gold in the world, but for now, I give you all
            my heart and my success.
          </p>
        </div>

        <button
          onClick={onBack}
          className="mt-10 px-8 py-2 flex items-center bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all text-amber-400"
        >
          Return to Kingdom
          <img className="w-25 mr-2" src="https://media.tenor.com/l6ruHHEruJgAAAAi/cat-kitty.gif" alt="" />
        </button>
      </div>
    </div>
  );
}
