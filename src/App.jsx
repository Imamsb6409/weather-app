import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import SpecialCard from "./components/SpecialCard";
import { QueenCard } from "./components/SpecialCard";
import { GodIsCard } from "./components/SpecialCard";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSecret, setShowSecret] = useState(false);
  const [showQueen, setShowQueen] = useState(false);
  const [showGod, setShowGod] = useState(false);
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

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
      const input = location.toLowerCase();

      // Reset semua mode dulu
      setShowSecret(false);
      setShowQueen(false);
      setShowGod(false);

      if (input === "mozza") {
        setShowSecret(true);
      } else if (input === "queen" || input === "quenn" || input === "qeen") {
        setShowQueen(true);
      } else if (input === "amen" || input === "kanye" || input === "god") {
        setShowGod(true);
      } else {
        fetchWeather(location);
      }
      setLocation("");
    }
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
    if (showSecret) return "from-rose-950 via-purple-950 to-black"; // Mode Mozza
    if (showQueen) return "from-[#1a1a1a] via-[#45320d] to-black"; // Mode Queen

    if (!data.weather) return "from-slate-950 via-slate-900 to-black";

    const condition = data.weather[0].main.toLowerCase();

    // --- LOGIKA WARNA SESUAI CUACA ---

    // 1. CERAH
    if (condition.includes("clear")) {
      return "from-[#f59e0b] via-[#3b82f6] to-[#1e3a8a]";
    }

    // 2. BERAWAN
    if (condition.includes("cloud")) {
      return "from-[#475569] via-[#1e293b] to-[#020617]";
    }

    // 3. HUJAN / BADAI
    if (
      condition.includes("rain") ||
      condition.includes("drizzle") ||
      condition.includes("thunderstorm")
    ) {
      return "from-[#1e1b4b] via-[#312e81] to-[#020617]";
    }

    // 4. KABUT / SALJU
    if (
      condition.includes("mist") ||
      condition.includes("smoke") ||
      condition.includes("snow")
    ) {
      return "from-[#94a3b8] via-[#475569] to-[#1e293b]";
    }

    return "from-slate-950 via-slate-900 to-black";
  };

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("mozzu_history")) || [];
    setHistory(savedHistory);
    fetchWeather(localStorage.getItem("mozzu_default") || "Jakarta");
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen w-full transition-all duration-1000 ease-in-out bg-gradient-to-br text-white font-sans ${getBgStyle()}`}
    >
      <Sidebar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
        loading={loading}
        history={history}
        fetchWeather={fetchWeather}
        deleteHistory={(e, city) => {
          e.stopPropagation();
          const updated = history.filter((c) => c !== city);
          setHistory(updated);
          localStorage.setItem("mozzu_history", JSON.stringify(updated));
        }}
        isMozzaMode={showSecret}
      />

      <div className="flex-1 flex items-center justify-center p-4 md:p-10 relative">
        {showSecret && <SpecialCard onBack={() => setShowSecret(false)} />}
        {showQueen && <QueenCard onBack={() => setShowQueen(false)} />}
        {showGod && <GodIsCard onBack={() => setShowGod(false)} />}

        {!showSecret && !showQueen && !showGod && (
          <WeatherCard data={data} formatTime={formatTime} />
        )}
      </div>
    </div>
  );
}
