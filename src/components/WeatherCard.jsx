const WeatherCard = ({ data, formatTime }) => {
  if (!data.name) return <div className="text-white/10 tracking-[1em] animate-pulse text-xs uppercase text-center">Connecting to Mozzu...</div>;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const flagUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;

  return (
    <div className="relative w-full max-w-2xl p-8 md:p-12 bg-white/10 border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-700">
      <div className="relative z-10 flex items-center md:items-start justify-between mb-10 md:mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light italic tracking-tighter uppercase leading-none text-white">{data.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <img src={flagUrl} alt={data.sys.country} className="w-6 h-6 object-contain" />
            <p className="text-[9px] md:text-[10px] font-black text-cyan-400 tracking-[0.5em] uppercase opacity-90">{data.sys?.country} — STATION ACTIVE</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-3xl p-2 md:p-4 border border-white/5"><img src={iconUrl} className="w-20 h-20 md:w-32 md:h-32 object-contain" alt="" /></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-6 mb-12 md:mb-16">
        <h2 className="text-[7rem] md:text-[11rem] font-black leading-none tracking-tighter bg-clip-text bg-linear-to-b from-white to-white/20 text-transparent">{data.main?.temp.toFixed()}°</h2>
        <div className="flex flex-col items-center md:items-start pb-4 md:pb-8">
          <p className="text-xl md:text-3xl font-medium text-cyan-300 tracking-[0.2em] uppercase">Celsius</p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-light italic text-white/50 tracking-widest uppercase">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 md:py-10 border-t border-white/10 text-white">
        <div className="text-center md:text-left"><p className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Humidity</p><p className="text-xl">{data.main?.humidity}%</p></div>
        <div className="text-center md:text-left"><p className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Wind</p><p className="text-xl">{data.wind?.speed} m/s</p></div>
        <div className="text-center md:text-left"><p className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Sunrise</p><p className="text-xl text-[#FFD700]">{formatTime(data.sys?.sunrise, data.timezone)}</p></div>
        <div className="text-center md:text-left"><p className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Sunset</p><p className="text-xl text-[#FF8C00]">{formatTime(data.sys?.sunset, data.timezone)}</p></div>
      </div>
    </div>
  );
};

export default WeatherCard;