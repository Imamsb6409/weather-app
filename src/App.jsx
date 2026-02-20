import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({
  location,
  setLocation,
  searchLocation,
  loading,
  history,
  fetchWeather,
  deleteHistory,
}) => (
  <div className="z-20 w-full md:w-1/3 md:max-w-sm p-6 md:p-8 flex flex-col bg-black/40 backdrop-blur-2xl border-b md:border-b-0 md:border-r border-white/5 shadow-2xl transition-colors duration-1000">
    <h2 className="text-lg md:text-xl font-black italic tracking-[0.4em] uppercase text-cyan-400 mb-6 md:mb-10 text-center md:text-left">
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
          <div
            key={idx}
            onClick={() => fetchWeather(city)}
            className="flex items-center justify-between p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl cursor-pointer transition-all duration-300 group hover:bg-white/10 min-w-[140px] md:min-w-0"
          >
            <span className="text-xs md:text-sm font-medium tracking-wide capitalize truncate mr-2 text-white">
              {city}
            </span>
            <button
              onClick={(e) => deleteHistory(e, city)}
              className="p-1 hover:bg-red-500/40 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 md:h-4 w-3 md:w-4 text-white/20 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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

const SpecialCard = ({ onBack }) => {
  const emojis = ["🥰","🤍", "💖","💕", "✨", "🌸", "💍", "👑"];
  const [emojiIndex, setEmojiIndex] = useState(0);

  const changeEmoji = () => {
    setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  return (
    <div className="relative w-full max-w-md p-10 bg-gradient-to-br from-rose-500/30 via-orange-400/20 to-purple-600/30 border border-white/40 rounded-[3rem] backdrop-blur-3xl shadow-[0_0_80px_-10px_rgba(251,113,133,0.4)] animate-in fade-in zoom-in duration-1000 text-center overflow-hidden">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-500/40 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/40 rounded-full blur-[80px] animate-pulse"></div>

      <div className="relative z-10">
        {/* Icon yang bisa diklik untuk ganti emoji */}
        <div 
          className="text-5xl mb-6 drop-shadow-lg animate-bounce cursor-pointer hover:scale-125 transition-transform active:scale-90 select-none"
          onClick={changeEmoji}
        >
          {emojis[emojiIndex]}
        </div>
        
        <h2 className="text-4xl font-black italic tracking-tighter text-white mb-2 uppercase">For Mozza~</h2>
        <p className="text-[10px] font-bold text-rose-300 tracking-[0.5em] mb-8 uppercase opacity-80">Heart of the Station</p>
        
        <div className="space-y-6 text-white/90 font-light tracking-wide leading-relaxed">
          <p className="text-lg italic font-medium text-white">
            "Mozza~, web ini mungkin baru satu hal kecil yang kubangun khusus untukmu. Tapi ketahuilah, ini adalah awal dari janji besarku."
          </p>
          <p className="text-sm text-rose-100/70 uppercase tracking-[0.2em] leading-loose">
            Aku akan terus berjuang melampaui batas suksesku, agar suatu saat nanti, koordinat terakhirku adalah selamanya di sampingmu. I love you forever.
          </p>
        </div>

        <button onClick={onBack} className="mt-10 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all text-white">
          Back to System
        </button>
      </div>
    </div>
  );
};

const WeatherCard = ({ data, formatTime }) => {
  if (!data.name)
    return (
      <div className="text-white/10 tracking-[1em] animate-pulse text-xs uppercase">
        Connecting to Mozzu...
      </div>
    );

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const flagUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;

  return (
    <div className="relative w-full max-w-2xl p-8 md:p-12 bg-white/10 border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-700">
      <img
        src={iconUrl}
        className="absolute -right-20 -top-20 w-80 h-80 opacity-[0.07] pointer-events-none rotate-12 object-contain aspect-square"
        alt=""
      />
      <div className="relative z-10 flex items-center md:items-start justify-between mb-10 md:mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light italic tracking-tighter uppercase leading-none text-white">
            {data.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <img
              src={flagUrl}
              alt={data.sys.country}
              className="w-6 h-6 object-contain"
            />
            <p className="text-[9px] md:text-[10px] font-black text-cyan-400 tracking-[0.5em] uppercase opacity-90">
              {data.sys?.country} — STATION ACTIVE
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white/5 rounded-3xl p-2 md:p-4 backdrop-blur-sm border border-white/5">
          <img
            src={iconUrl}
            className="w-20 h-20 md:w-32 md:h-32 object-contain aspect-square drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-1000"
            alt=""
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-6 mb-12 md:mb-16">
        <h2 className="text-[7rem] md:text-[11rem] font-black leading-none tracking-tighter bg-clip-text bg-gradient-to-b from-white to-white/20 text-transparent">
          {data.main?.temp.toFixed()}°
        </h2>
        <div className="flex flex-col items-center md:items-start pb-4 md:pb-8">
          <p className="text-xl md:text-3xl font-medium text-cyan-300 tracking-[0.2em] uppercase">
            Celsius
          </p>
          <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-light italic text-white/50 tracking-widest uppercase">
            {data.weather[0].description}
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 md:py-10 border-t border-white/10">
        <div className="text-center md:text-left">
          <p className="text-[8px] font-bold text-white/30 tracking-widest uppercase mb-1">
            Humidity
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            {data.main?.humidity}%
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[8px] font-bold text-white/30 tracking-widest uppercase mb-1">
            Wind
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            {data.wind?.speed} m/s
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[8px] font-bold text-white/30 tracking-widest uppercase mb-1">
            Sunrise
          </p>
          <p className="text-xl md:text-2xl text-[#FFD700] font-semibold drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
            {formatTime(data.sys?.sunrise, data.timezone)}
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[8px] font-bold text-white/30 tracking-widest uppercase mb-1">
            Sunset
          </p>
          <p className="text-xl md:text-2xl text-[#FF8C00] font-semibold drop-shadow-[0_0_8px_rgba(255,140,0,0.4)]">
            {formatTime(data.sys?.sunset, data.timezone)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSecret, setShowSecret] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    if (showSecret) {
      document.title = "Mozzu ~ For Mozza~";
    } else if (data.name) {
      document.title = `Mozzu ~ ${data.name}`;
    } else {
      document.title = "Mozzu ~ Weather Station";
    }
  }, [data, showSecret]);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setShowSecret(false);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
      );
      setData(response.data);
      localStorage.setItem("mozzu_default", cityName);
      setHistory((prev) => {
        const filtered = prev.filter(
          (c) => c.toLowerCase() !== cityName.toLowerCase(),
        );
        const updated = [cityName, ...filtered].slice(0, 6);
        localStorage.setItem("mozzu_history", JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      if (location.toLowerCase() === "mozza") {
        setShowSecret(true);
        setLocation("");
      } else {
        fetchWeather(location);
        setLocation("");
      }
    }
  };

  const deleteHistory = (e, city) => {
    e.stopPropagation();
    const updated = history.filter((c) => c !== city);
    setHistory(updated);
    localStorage.setItem("mozzu_history", JSON.stringify(updated));
  };

  const formatTime = (unix, timezone) => {
    if (!unix) return "";
    const date = new Date((unix + timezone) * 1000);
    return (
      date.getUTCHours().toString().padStart(2, "0") +
      ":" +
      date.getUTCMinutes().toString().padStart(2, "0")
    );
  };

  const getBgStyle = () => {
    if (showSecret) return "from-rose-950 via-purple-950 to-black";
    if (!data.weather) return "from-slate-950 via-slate-900 to-black";
    const condition = data.weather[0].main.toLowerCase();
    if (condition.includes("clear"))
      return "from-[#0f172a] via-[#1e3a8a] to-[#020617]";
    if (condition.includes("cloud"))
      return "from-[#1e293b] via-[#334155] to-[#020617]";
    return "from-slate-950 via-slate-900 to-black";
  };

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("mozzu_history")) || [];
    setHistory(savedHistory);
    const startCity = localStorage.getItem("mozzu_default") || "Jakarta";
    fetchWeather(startCity);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen w-full transition-all duration-1000 ease-in-out bg-gradient-to-br overflow-x-hidden text-white font-sans ${getBgStyle()}`}
    >
      <Sidebar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
        loading={loading}
        history={history}
        fetchWeather={fetchWeather}
        deleteHistory={deleteHistory}
      />

      <div className="flex-1 flex items-center justify-center p-4 md:p-10 relative">
        {showSecret ? (
          <SpecialCard onBack={() => setShowSecret(false)} />
        ) : (
          <WeatherCard data={data} formatTime={formatTime} />
        )}
      </div>
    </div>
  );
}
