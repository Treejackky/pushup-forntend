import { createBrowserRouter, Navigate, Outlet, useParams } from "react-router-dom";

import App from "./app";
import VideoPage from "./pages/monitor/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";

import NotFoundPage from "./404"; 

const languages = ["en", "th"];

const LanguageGuard = () => {
  const { lang } = useParams();
  return languages.includes(lang);
};

const initRoute = [
  { path: "/", element: <Navigate to="/en" replace /> },
  {
    path: "/:lang",
    element: <LanguageGuard />,
    children: [
      { index: true, element: <App /> },
      { path: "video", element: <VideoPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

const router = createBrowserRouter(initRoute);

export default router;
