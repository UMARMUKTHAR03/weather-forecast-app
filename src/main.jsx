import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

const Home = lazy(() => import("./routes/Home"));
const Forecast = lazy(() => import("./routes/Forecast"));

const appRoutes = [
  { index: true, element: <Home /> },
  {
    path: "forecast",
    element: <Forecast />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="flex h-screen items-center justify-center font-medium text-slate-500">Loading SkyCast...</div>}>
        <App />
      </Suspense>
    ),
    children: appRoutes,
  },
  {
    path: "/weather-forecast-app",
    element: (
      <Suspense fallback={<div className="flex h-screen items-center justify-center font-medium text-slate-500">Loading SkyCast...</div>}>
        <App />
      </Suspense>
    ),
    children: appRoutes,
  },
  {
    path: "/weather-app-vite",
    element: (
      <Suspense fallback={<div className="flex h-screen items-center justify-center font-medium text-slate-500">Loading SkyCast...</div>}>
        <App />
      </Suspense>
    ),
    children: appRoutes,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div className="flex h-screen items-center justify-center font-medium text-slate-500">Loading SkyCast...</div>}>
        <App />
      </Suspense>
    ),
    children: appRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
