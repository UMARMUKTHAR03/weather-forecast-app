import { useSelector } from "react-redux";
import { useGetForecastDailyQuery } from "../../services/WeatherAPI";
import WeatherIcon from "../common/WeatherIcon";

const fallbackDaily = [
  { day: "Today", tempDay: 24, tempNight: 16, icon: "01d", id: 800, desc: "Sunny" },
  { day: "Tue", tempDay: 23, tempNight: 15, icon: "02d", id: 801, desc: "Few Clouds" },
  { day: "Wed", tempDay: 21, tempNight: 14, icon: "10d", id: 500, desc: "Light Rain" },
  { day: "Thu", tempDay: 22, tempNight: 15, icon: "03d", id: 802, desc: "Scattered Clouds" },
  { day: "Fri", tempDay: 25, tempNight: 17, icon: "01d", id: 800, desc: "Sunny" },
  { day: "Sat", tempDay: 26, tempNight: 18, icon: "01d", id: 800, desc: "Clear Sky" },
  { day: "Sun", tempDay: 24, tempNight: 16, icon: "02d", id: 801, desc: "Partly Cloudy" },
];

function ForecastCard() {
  const { lat, lng } = useSelector((state) => state.geolocation.geolocation);
  const { data, isSuccess } = useGetForecastDailyQuery({
    lat,
    lng,
  });

  function convertToDate(dt) {
    let utc_time = new Date(dt * 1000);
    return utc_time.toLocaleString("en-us", {
      weekday: "short",
    });
  }

  const list = isSuccess && data?.list
    ? data.list.slice(0, 7).map((f) => ({
        day: convertToDate(f.dt),
        tempDay: Math.round(f.temp.day),
        tempNight: Math.round(f.temp.night),
        icon: f.weather[0]?.icon,
        id: f.weather[0]?.id,
        desc: f.weather[0]?.main,
      }))
    : fallbackDaily;

  return (
    <>
      {list.map((item, i) => (
        <div
          key={i}
          className="flex w-full flex-col items-center justify-between rounded-3xl bg-white/90 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl border border-white/60 transition-all duration-300 hover:scale-[1.02] dark:bg-slate-900/90 dark:shadow-black/40 dark:border-slate-800/80"
        >
          <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {item.day}
          </div>

          <div className="my-3 flex h-16 w-16 items-center justify-center">
            <WeatherIcon iconType={item.icon} id={item.id} size={36} />
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            {item.desc || "Clear"}
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {item.tempDay}&deg;
            </span>
            <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
              {item.tempNight}&deg;
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ForecastCard;
