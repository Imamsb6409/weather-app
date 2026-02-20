import React from "react";

const MegaCard = ({ onBack }) => {
  return (
    <div className="relative w-full max-w-md p-10 bg-white/10 backdrop-blur-3xl border-2 border-amber-200/30 rounded-[3rem] shadow-[0_0_50px_rgba(251,191,36,0.2)] text-center overflow-hidden animate-[float_6s_ease-in-out_infinite]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
      {/* Dekorasi Persahabatan */}
      <div className="absolute top-10 right-10 text-amber-400/20 animate-spin-slow duration-[10s] text-2xl">
        ☀️
      </div>
      <div className="absolute bottom-20 left-10 text-emerald-400/20 animate-bounce duration-[4s] text-3xl">
        🌱
      </div>
      <div className="relative z-10">
        {/* Icon Persahabatan */}
        <div className="inline-block text-6xl mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">
          🌼
        </div>

        <h2 className="text-sm font-bold tracking-[0.4em] text-amber-200 uppercase mb-2">
          Special Person
        </h2>
        <h1 className="text-4xl font-sans font-black text-white mb-1 tracking-tight italic">
          For <span className="text-amber-400">Mega!</span>
        </h1>
        <p className="text-[10px] text-emerald-200/50 tracking-[0.2em] uppercase mb-8 font-bold">
          "A Truly Great Friend"
        </p>

        <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

        <div className="space-y-6 text-slate-100 font-medium leading-relaxed">
          <p className="text-lg italic">
            "Terima kasih ya Mega, sudah mau jadi temanku yang sangat baik.
            Kehadiranmu bikin hari-hariku jadi lebih cerah!"
          </p>

          <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-400/20 relative group">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-[9px] px-3 py-1 rounded-full text-white font-black tracking-widest uppercase shadow-md">
              Appreciation Note
            </span>
            <p className="text-sm text-amber-50; pt-2 italic leading-relaxed">
              "Semoga harimu selalu penuh tawa dan kebahagiaan, sesenang aku
              berteman sama kamu."
            </p>
          </div>

          <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">
            Built with respect by Mozzu Dev
          </p>
        </div>

        {/* Tombol Back */}
        <button
          onClick={onBack}
          className="mt-10 group relative px-10 py-4 overflow-hidden rounded-full bg-amber-500 text-white text-xs font-black tracking-[0.3em] uppercase transition-all hover:scale-110 active:scale-95 shadow-[0_10px_20px_rgba(245,158,11,0.3)]"
        >
          <span className="relative z-10 flex items-center">
            You're Awesome!{" "}
            <img
              className="w-25"
              src="https://media.tenor.com/NlUeSeHyCKIAAAAi/good-job-well-done.gif"
              alt="good job"
            />
          </span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
        </button>
      </div>
      {/* Glow Background */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]"></div>
      {/* Lagu: Lullaby atau yang ceria (Optional) */}
      <iframe
        className="hidden"
        src="https://www.youtube.com/embed/BCvWHPbmNxc?autoplay=1&start=5"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default MegaCard;
