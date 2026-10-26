import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import OtherCities from "./components/widgets/OtherCities";
import WeatherMap from "./components/widgets/WeatherMap";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-[#0b0f19]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Header />
        <main className="mt-6">
          <Outlet />
        </main>

        <section className="mt-8 pb-12">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1">
              <WeatherMap />
            </div>
            <div className="lg:w-80">
              <OtherCities />
            </div>
          </div>
        </section>

        {/* Modern Footer with Creator Attribution */}
        <footer className="border-t border-slate-200/70 py-8 text-center text-sm text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-medium">
              SkyCast • Designed & Built by{" "}
              <a
                href="https://github.com/UMARMUKTHAR03"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                UMAR MUKTHAR
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/UMARMUKTHAR03/weather-forecast-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200/60 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750 transition-colors"
              >
                <FaGithub className="text-sm" />
                Repository
              </a>
              <span>MIT Licensed</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
