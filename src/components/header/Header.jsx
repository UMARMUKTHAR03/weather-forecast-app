import { Link, useLocation } from "react-router-dom";
import Location from "./Location";
import SearchBar from "./SearchBar";
import ThemeSwitchToggle from "./ThemeSwitchToggle";
import { WiDayCloudy } from "react-icons/wi";

function Header() {
  const location = useLocation();
  const isForecast = location.pathname.includes("forecast");

  return (
    <header className="pt-6 pb-4">
      {/* Top Bar with Brand, Search, Location & Theme Toggle */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 text-white shadow-lg shadow-indigo-500/25">
            <WiDayCloudy className="text-3xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SkyCast</span>
              <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">v1.0</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">By Umar Mukthar</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center max-w-xl mx-auto w-full">
          <SearchBar />
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3">
          <Location />
          <ThemeSwitchToggle />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-6 flex items-center justify-between border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div className="flex gap-2">
          <Link to="">
            <button
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                !isForecast
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              Current & Hourly
            </button>
          </Link>

          <Link to="forecast">
            <button
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                isForecast
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              10-Day Forecast
            </button>
          </Link>
        </div>

        <a
          href="https://github.com/UMARMUKTHAR03"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <span>Created by</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Umar Mukthar</span>
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
