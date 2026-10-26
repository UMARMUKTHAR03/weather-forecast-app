import { useSelector } from "react-redux";
import { useGetCurrentWeatherQuery } from "../../services/WeatherAPI";
import WeatherIcon from "../common/WeatherIcon";
import { TiLocationArrow } from "react-icons/ti";
import { FiSunrise, FiSunset, FiWind, FiDroplet } from "react-icons/fi";

const fallbackWeather = {
  name: "New York",
  timezone: -14400,
  dt: Math.floor(Date.now() / 1000),
  main: {
    temp: 24,
    feels_like: 23,
    temp_min: 19,
    temp_max: 26,
    humidity: 55,
    pressure: 1013,
  },
  weather: [{ id: 800, main: "Clear", description: "Sunny & Pleasant", icon: "01d" }],
  wind: { speed: 3.8 },
  sys: {
    sunrise: Math.floor(Date.now() / 1000) - 3600 * 7,
    sunset: Math.floor(Date.now() / 1000) + 3600 * 5,
  },
};

function WeatherCard() {
  const { lat, lng } = useSelector((state) => state.geolocation.geolocation);
  const { data, isSuccess } = useGetCurrentWeatherQuery({
    lat,
    lng,
  });

  const weather = isSuccess && data ? data : fallbackWeather;

  function convertToDate(timezone, dt) {
    let utc_time = new Date(dt * 1000);
    let local_time = new Date(utc_time.getTime() + timezone * 1000);
    return local_time.toLocaleString("en-us", {
      timeZone: "UTC",
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }

  function getLocalTime(timezone, dt) {
    let utc_time = new Date(dt * 1000);
    let local_time = new Date(utc_time.getTime() + timezone * 1000);
    return local_time.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/80 to-indigo-50/50 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl border border-white/60 transition-all duration-300 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-indigo-950/30 dark:shadow-black/40 dark:border-slate-800/80">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800/60">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Live Forecast</span>
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {convertToDate(weather.timezone, weather.dt)}
          </h2>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {getLocalTime(weather.timezone, weather.dt)}
        </div>
      </div>

      {/* Main Temperature & Weather Icon */}
      <div className="my-5 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
            <TiLocationArrow className="text-sm" />
            <span>{weather.name}</span>
          </div>
          <div className="mt-2 text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
            {Math.round(weather.main.temp)}
            <span className="text-indigo-500 font-light">&deg;C</span>
          </div>
          <p className="mt-1 text-sm font-medium capitalize text-slate-500 dark:text-slate-400">
            {weather.weather[0]?.description || "Partly Cloudy"}
          </p>
        </div>

        <div className="flex h-28 w-28 items-center justify-center filter drop-shadow-md">
          <WeatherIcon
            iconType={weather.weather[0]?.icon || "01d"}
            id={weather.weather[0]?.id || 800}
            size={48}
          />
        </div>
      </div>

      {/* Secondary Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs font-medium dark:border-slate-800/60">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50/80 p-2.5 dark:bg-slate-800/50">
          <div className="rounded-xl bg-indigo-100/70 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <FiDroplet className="text-sm" />
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-500">Humidity</div>
            <div className="font-bold text-slate-800 dark:text-slate-200">{weather.main.humidity}%</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-50/80 p-2.5 dark:bg-slate-800/50">
          <div className="rounded-xl bg-sky-100/70 p-2 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
            <FiWind className="text-sm" />
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-500">Wind</div>
            <div className="font-bold text-slate-800 dark:text-slate-200">{Math.round(weather.wind.speed)} m/s</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-50/80 p-2.5 dark:bg-slate-800/50">
          <div className="rounded-xl bg-amber-100/70 p-2 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
            <FiSunrise className="text-sm" />
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-500">Sunrise</div>
            <div className="font-bold text-slate-800 dark:text-slate-200">{getLocalTime(weather.timezone, weather.sys.sunrise)}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-50/80 p-2.5 dark:bg-slate-800/50">
          <div className="rounded-xl bg-orange-100/70 p-2 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
            <FiSunset className="text-sm" />
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-500">Sunset</div>
            <div className="font-bold text-slate-800 dark:text-slate-200">{getLocalTime(weather.timezone, weather.sys.sunset)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
