import { useState, useEffect } from "react";
import axios from "./api/axios";
import Sidebar from "./components/SideBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const getBgStyle = () => {
    if (!data.weather) return "from-slate-900 via-slate-900 to-black";
    const condition = data.weather[0].main.toLowerCase();
    switch (condition) {
      case "clear": return "from-[#1e3a8a] via-[#3b82f6] to-[#fbbf24]"; 
      case "clouds": return "from-[#334155] via-[#475569] to-[#1e293b]";
      case "rain": return "from-[#0f172a] via-[#1e293b] to-[#334155]";
      case "thunderstorm": return "from-[#1e1b4b] via-[#312e81] to-[#1e1b4b]";
      case "snow": return "from-[#cbd5e1] via-[#94a3b8] to-[#64748b]";
      default: return "from-slate-900 via-slate-800 to-slate-950";
    }
  };

  const formatTime = (unix, timezone) => {
    if (!unix) return "";
    const date = new Date((unix + timezone) * 1000);
    return date.getUTCHours().toString().padStart(2, '0') + ":" + date.getUTCMinutes().toString().padStart(2, '0');
  };

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    try {
      const response = await axios.get(`/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
      setData(response.data);
      setHistory(prev => {
        const filtered = prev.filter(c => c.toLowerCase() !== cityName.toLowerCase());
        const updated = [cityName, ...filtered].slice(0, 6);
        localStorage.setItem("weatherHistory", JSON.stringify(updated));
        return updated;
      });
    } catch (err) { alert("City not found!"); } finally { setLoading(false); }
  };

  const searchLocation = (e) => { if (e.key === "Enter") { fetchWeather(location); setLocation(""); } };
  const deleteHistory = (e, city) => { e.stopPropagation(); const upd = history.filter(c => c !== city); setHistory(upd); localStorage.setItem("weatherHistory", JSON.stringify(upd)); };

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("weatherHistory")) || []);
    fetchWeather("Mooka");
  }, []);

  return (
    <div className={`flex flex-col md:flex-row min-h-screen w-full transition-all duration-1000 ease-in-out bg-gradient-to-br overflow-x-hidden text-white font-sans ${getBgStyle()}`}>
      <Sidebar 
        location={location} setLocation={setLocation} searchLocation={searchLocation} 
        loading={loading} history={history} fetchWeather={fetchWeather} deleteHistory={deleteHistory} 
      />
      <div className="flex-1 flex items-center justify-center p-4 md:p-10 relative">
        <WeatherCard data={data} formatTime={formatTime} />
      </div>
    </div>
  );
}

export default App;