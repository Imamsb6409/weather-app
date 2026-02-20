import React from "react";

const FullnameCard = ({ onBack }) => {
  return (
    /* Efek Gerak Melayang (Floating) pada Container Utama */
    <div className="relative w-full max-w-md p-10 bg-white/10 backdrop-blur-3xl border-2 border-rose-300/30 rounded-[3rem] shadow-[0_0_50px_rgba(244,114,182,0.3)] text-center overflow-hidden animate-[float_6s_ease-in-out_infinite]">
      {/* CSS Internal untuk Animasi Float kustom */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>

      {/* Partikel Hati yang bergerak acak di background */}
      <div className="absolute top-10 left-10 text-rose-400/20 animate-pulse duration-[3s] text-2xl">
        ❤️
      </div>
      <div className="absolute bottom-20 right-10 text-rose-400/20 animate-bounce duration-[5s] text-3xl">
        💖
      </div>
      <div className="absolute top-1/2 right-5 text-rose-400/10 animate-pulse text-xl">
        ✨
      </div>

      <div className="relative z-10">
        {/* Heart Icon dengan efek detak jantung (heartbeat) */}
        <div className="inline-block text-6xl mb-6 animate-[ping_2s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(244,114,182,1)]">
          ❤️
        </div>

        <h2 className="text-sm font-bold tracking-[0.5em] text-rose-300 uppercase mb-2 animate-pulse">
          My Love
        </h2>
        <h1 className="text-4xl font-serif font-bold text-white mb-1 drop-shadow-md italic">
          Mozza <span className="text-rose-400">Andara</span>
        </h1>
        <p className="text-[10px] text-rose-200/50 tracking-[0.3em] uppercase mb-8 italic">
          "Endless Chapter of Us"
        </p>

        {/* Garis pemisah yang cahayanya gerak (shimmer effect) */}
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8 animate-pulse"></div>

        <div className="space-y-6 text-slate-100 font-medium leading-relaxed">
          <p className="text-lg italic leading-relaxed">
            "Setiap detik bersamamu adalah melodi terindah. <br /> Kamu bukan
            sekadar takdir, tapi seluruh duniaku."
          </p>

          <div className="p-6 bg-rose-500/10 rounded-2xl border border-rose-400/20 relative group mt-4">
            {" "}
            {/* Efek cahaya lewat (shimmer) di dalam box */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            <span className="absolute z-50 -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-[9px] px-3 py-1 rounded-full text-white font-black tracking-widest uppercase shadow-lg">
              Eternal Promise
            </span>
            <p className="text-sm text-rose-100 italic pt-2">
              "Di matamu, aku menemukan semesta. <br /> Di hatimu, aku menemukan
              rumah."
            </p>
          </div>
        </div>

        {/* Tombol yang ikutan gerak lembut */}
        <button
          onClick={onBack}
          className="mt-10 group relative px-10 py-4 overflow-hidden rounded-full bg-rose-500 text-white text-xs font-black tracking-[0.3em] uppercase transition-all hover:scale-110 active:scale-95 shadow-[0_10px_20px_rgba(244,114,182,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            I Love You <span className=""><img src="https://media.tenor.com/5XOehZUJ1MAAAAAi/cute-cat-couple.gif" alt="" /></span>
          </span>
        </button>
      </div>

      {/* Background Glow yang perlahan berubah ukuran */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

      {/* Music Player */}
      <iframe
        className="hidden"
        src="https://www.youtube.com/embed/5gg17XXXiNo?autoplay=1&start=170"
        allow="autoplay"
      ></iframe>
      <footer className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-rose-200/50">YOKK SEMANGATT!!</footer>
    </div>
  );
};

export default FullnameCard;
