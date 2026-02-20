const SideBar = ({ 
  location, 
  setLocation, 
  searchLocation, 
  loading, 
  history, 
  fetchWeather, 
  deleteHistory, 
  isMozzaMode 
}) => {
  return (
    <div className="z-20 w-full md:w-1/3 md:max-w-sm p-6 md:p-8 flex flex-col bg-black/40 backdrop-blur-2xl border-b md:border-b-0 md:border-r border-white/5 shadow-2xl transition-colors duration-1000">
      <h2 className={`text-lg md:text-xl font-black italic tracking-[0.4em] uppercase mb-6 md:mb-10 text-center md:text-left transition-all duration-1000 
        ${isMozzaMode 
          ? 'bg-linear-to-r from-pink-400 via-rose-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]' 
          : 'text-cyan-400'}`}>
        Mozzu Station
      </h2>

      <div className="relative mb-6 md:mb-10">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Search City..."
          className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all backdrop-blur-md placeholder:text-white/20 text-sm text-white"
        />
        {loading && (
          <div className="absolute right-4 top-3 md:top-4 animate-spin h-4 md:h-5 w-4 md:w-5 border-b-2 border-cyan-400 rounded-full"></div>
        )}
      </div>

      <div className="flex-1 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 custom-scrollbar">
        <p className="text-[9px] md:text-[10px] text-white/30 tracking-[0.2em] uppercase mb-3 text-center md:text-left">
          Recent Searches
        </p>
        <div className="flex flex-row md:flex-col gap-3">
          {history.map((city, idx) => (
            <div key={idx} onClick={() => fetchWeather(city)} className="flex items-center justify-between p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl cursor-pointer transition-all duration-300 group hover:bg-white/10 min-w-35 md:min-w-0">
              <span className="text-xs md:text-sm font-medium tracking-wide capitalize truncate mr-2 text-white">{city}</span>
              <button onClick={(e) => deleteHistory(e, city)} className="p-1 hover:bg-red-500/40 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4 text-white/20 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-auto pt-6 text-[8px] text-white/20 tracking-[0.5em] uppercase font-bold hidden md:block text-center md:text-left">
        Mozzu Intelligence Lab
      </footer>
    </div>
  );
};

export default SideBar;