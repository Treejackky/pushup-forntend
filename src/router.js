import { createBrowserRouter, Navigate, Outlet, useParams, useLocation } from "react-router-dom";

import App from "./app";
import Monitor from "./pages/monitor/index";
import NotFoundPage from "./404";
import Register from "./pages/register";
import Login from "./pages/login";
import BMI from "./pages/bmi/index"
import WorkProgress from "./pages/stats/index"
import WorkPlan from "./pages/calendar/index"
import LeaderBoard from "./pages/board/index"
import Home from "./pages/home/index"
import { Layout } from "./components/layouts/Layout"; // Import Layout

const languages = ["en", "th"];

// ดึง path ที่มีจาก children
const childrenRoutes = [
  { index: true, element: <App /> },
  { path: "home", element: <Home/> },
  { path: "monitor", element: <Monitor /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "stats", element: <WorkProgress/> },
  { path: "calendar", element: <WorkPlan/> },
  { path: "board", element: <LeaderBoard/> },
  { path: "bmi", element: <BMI/> },
];

// ฟังก์ชันช่วยเช็คว่า path มีอยู่จริงใน children หรือไม่
const isValidPath = (path) => {
  return childrenRoutes.some((route) => (route.index ? path === "" : route.path === path));
};

const LanguageGuard = () => {
  const { lang } = useParams();
  const location = useLocation();
  const currentPath = location.pathname.split("/").slice(1).join("/");

  if (!lang) {
    return isValidPath(currentPath) ? <Navigate to={`/en/${currentPath}`} replace /> : <Navigate to="/en/404" replace />;
  }

  if (!languages.includes(lang)) {
    return <Navigate to="/en/404" replace />;
  }

  return <Outlet />;
};

const initRoute = [
  { path: "/", element: <Navigate to="/en" replace /> },
  {
    path: "/:lang?",
    element: <LanguageGuard />,
    children: [
      {
        element: <Layout />,
        children: [
          ...childrenRoutes,
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(initRoute);

export default router;
