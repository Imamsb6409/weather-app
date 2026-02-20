import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import SpecialCard from "./components/SpecialCard";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSecret, setShowSecret] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setShowSecret(false);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
      setData(response.data);
      localStorage.setItem("mozzu_default", cityName);
      setHistory(prev => {
        const filtered = prev.filter(c => c.toLowerCase() !== cityName.toLowerCase());
        const updated = [cityName, ...filtered].slice(0, 6);
        localStorage.setItem("mozzu_history", JSON.stringify(updated));
        return updated;
      });
    } catch (err) { alert("City not found!"); }
    finally { setLoading(false); }
  };

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      if (location.toLowerCase() === "mozza") {
        setShowSecret(true);
        setLocation("");
      } else { fetchWeather(location); setLocation(""); }
    }
  };

  const formatTime = (unix, timezone) => {
    if (!unix) return "";
    const date = new Date((unix + timezone) * 1000);
    return date.getUTCHours().toString().padStart(2, '0') + ":" + date.getUTCMinutes().toString().padStart(2, '0');
  };

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("mozzu_history")) || [];
    setHistory(savedHistory);
    fetchWeather(localStorage.getItem("mozzu_default") || "Jakarta");
  }, []);

  return (
    <div className={`flex flex-col md:flex-row min-h-screen w-full transition-all duration-1000 bg-gradient-to-br text-white font-sans ${showSecret ? 'from-rose-950 via-purple-950 to-black' : 'from-slate-950 via-slate-900 to-black'}`}>
      <Sidebar 
        location={location} setLocation={setLocation} searchLocation={searchLocation} 
        loading={loading} history={history} fetchWeather={fetchWeather} 
        deleteHistory={(e, city) => { e.stopPropagation(); const updated = history.filter(c => c !== city); setHistory(updated); localStorage.setItem("mozzu_history", JSON.stringify(updated)); }} 
        isMozzaMode={showSecret}
      />
      <div className="flex-1 flex items-center justify-center p-4 md:p-10 relative">
        {showSecret ? <SpecialCard onBack={() => setShowSecret(false)} /> : <WeatherCard data={data} formatTime={formatTime} />}
      </div>
    </div>
  );
}