# SkyCast • Real-Time Weather Intelligence 🌤️

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Umar%20Mukthar-indigo?style=flat-square)](https://github.com/UMARMUKTHAR03)

SkyCast is a modern, responsive real-time weather analytics application built with **React**, **Vite**, **Redux Toolkit**, and **Tailwind CSS**. It provides comprehensive meteorological data, hourly trends, interactive precipitation charts, UV radar indices, and location-based forecasting.

Developed and maintained by **[UMAR MUKTHAR](https://github.com/UMARMUKTHAR03)**.

---

## 🌟 Key Features

- **Real-Time Atmospheric Conditions:** Instant metrics for temperature, feels-like index, atmospheric pressure, wind direction/speed, and humidity.
- **Interactive Multi-Day Forecast:** Dynamic 10-day weather projection with detailed condition summaries and high/low ranges.
- **Hourly Weather Radar:** Real-time temperature and climate trend timeline for the next 24 hours.
- **Air Quality & Pollution Analysis:** Live AQI index tracking PM2.5, PM10, CO, NO2, and Ozone levels.
- **Precipitation & Rain Probabilities:** Interactive Chart.js visualizations tracking rainfall likelihood.
- **Geographic Exploration & Interactive Maps:** Integrated Leaflet map visualization for weather systems.
- **City Search & Autocomplete:** Global search powered by Google Places API / Open-Meteo geocoding.
- **Adaptive Dark / Light Interface:** System-aware theme toggle with glassmorphism design.

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 18, Vite
- **State Management:** Redux Toolkit (RTK Query for asynchronous API caching & synchronization)
- **Styling:** Tailwind CSS, PostCSS, Custom Design System
- **Icons & UI:** Heroicons, React Icons, Headless UI
- **Data Visualization:** Chart.js, Leaflet Maps
- **APIs:** OpenWeather API, Open-Meteo, Google Places

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or newer recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UMARMUKTHAR03/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY_OPENWEATHERMAP=your_openweather_api_key
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**UMAR MUKTHAR**
- GitHub: [@UMARMUKTHAR03](https://github.com/UMARMUKTHAR03)
- Role: Aspiring AI Engineer | Machine Learning Engineer | Full-Stack Developer

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
