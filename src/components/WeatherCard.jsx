import React from 'react';

const DetailItem = ({ label, value, colorClass }) => (
  <div className="flex flex-col items-center md:items-start">
    <p className="mb-1 text-[8px] md:text-[9px] font-bold text-white/30 tracking-[0.2em] uppercase">{label}</p>
    <p className={`text-lg md:text-2xl font-semibold transition-colors duration-500 ${colorClass || 'text-white'}`}>{value}</p>
  </div>
);

const WeatherCard = ({ data, formatTime }) => {
  if (!data.name) return <p className="text-white/10 tracking-[1em] animate-pulse text-xs">BOOTING MOZZU...</p>;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const flagUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;

  return (
    <div className="relative w-full max-w-2xl p-8 md:p-12 bg-white/10 border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-700">
 
      <img src={iconUrl} className="absolute -right-20 -top-20 w-80 h-80 opacity-[0.07] pointer-events-none rotate-12 object-contain aspect-square transition-opacity duration-1000" alt="bg" />

      <div className="relative z-10 flex items-center md:items-start justify-between mb-10 md:mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light italic tracking-tighter uppercase leading-none text-white">{data.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <img src={flagUrl} alt={data.sys.country} className="w-6 h-6 object-contain" />
            <p className="text-[9px] md:text-[10px] font-black text-cyan-400 tracking-[0.5em] uppercase opacity-90">{data.sys?.country} — STATION ACTIVE</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white/5 rounded-3xl p-2 md:p-4 backdrop-blur-sm border border-white/5">
          <img src={iconUrl} className="w-20 h-20 md:w-32 md:h-32 object-contain aspect-square drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-1000" alt="icon" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-6 mb-12 md:mb-16">
        <h2 className="text-[7rem] md:text-[11rem] font-black leading-none tracking-tighter bg-clip-text bg-gradient-to-b from-white via-white to-white/20 text-transparent transition-all duration-1000">
          {data.main?.temp.toFixed()}°
        </h2>
        <div className="flex flex-col items-center md:items-start pb-4 md:pb-8">
          <p className="text-xl md:text-3xl font-medium text-cyan-300 tracking-[0.2em] uppercase">Celsius</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-light italic text-white/50 tracking-widest uppercase">{data.weather[0].description}</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 md:py-10 border-t border-white/10">
        <DetailItem label="Humidity" value={`${data.main?.humidity}%`} />
        <DetailItem label="Wind" value={`${data.wind?.speed} m/s`} />
        <DetailItem label="Sunrise" value={formatTime(data.sys?.sunrise, data.timezone)} colorClass="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
        <DetailItem label="Sunset" value={formatTime(data.sys?.sunset, data.timezone)} colorClass="text-[#FF8C00] drop-shadow-[0_0_8px_rgba(255,140,0,0.4)]" />
      </div>
    </div>
  );
};

export default WeatherCard;