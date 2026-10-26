import { useSelector } from "react-redux";
import { BiTime } from "react-icons/bi";
import WeatherIcon from "../common/WeatherIcon";
import { useGetHourlyForecastQuery } from "../../services/WeatherAPI";

const fallbackHourly = [
  { time: "Now", temp: 24, icon: "01d", id: 800 },
  { time: "14:00", temp: 25, icon: "01d", id: 800 },
  { time: "16:00", temp: 24, icon: "02d", id: 801 },
  { time: "18:00", temp: 22, icon: "02d", id: 801 },
  { time: "20:00", temp: 20, icon: "03n", id: 802 },
  { time: "22:00", temp: 19, icon: "01n", id: 800 },
  { time: "00:00", temp: 18, icon: "01n", id: 800 },
  { time: "02:00", temp: 17, icon: "01n", id: 800 },
];

function HourlyForecast() {
  const { lat, lng } = useSelector((state) => state.geolocation.geolocation);
  const { data, isSuccess } = useGetHourlyForecastQuery({
    lat,
    lng,
  });

  function convertToHour(dt, timezone) {
    let utc_time = new Date(dt * 1000);
    let local_time = new Date(utc_time.getTime() + timezone * 1000);
    return local_time.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const items = isSuccess && data?.list
    ? data.list.slice(0, 10).map((list) => ({
        time: convertToHour(list.dt, data.city.timezone),
        temp: Math.round(list.main.temp),
        icon: list.weather[0]?.icon,
        id: list.weather[0]?.id,
      }))
    : fallbackHourly;

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-3xl bg-white/90 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl border border-white/60 dark:bg-slate-900/90 dark:shadow-black/40 dark:border-slate-800/80">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
        <BiTime className="h-4 w-4 text-indigo-500" />
        <span>Hourly Outlook</span>
      </div>

      <div className="mt-3 flex overflow-x-auto pb-2 scrollbar-thin gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex min-w-[70px] flex-col items-center justify-between rounded-2xl bg-slate-50/80 py-3 px-2 text-center transition-transform hover:-translate-y-1 dark:bg-slate-800/50"
          >
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-400">
              {item.time}
            </span>
            <div className="my-2 h-10 w-10">
              <WeatherIcon iconType={item.icon} id={item.id} size={28} />
            </div>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              {item.temp}&deg;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
