


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



export default GodIsCard;
