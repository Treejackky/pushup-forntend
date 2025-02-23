import { createBrowserRouter, Navigate, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import App from "./app";
import VideoPage from "./pages/monitor/index"; // Import หน้า Video

import NotFoundPage from "./404"; // Import หน้า 404

const languages = ["en", "th"];

const LanguageGuard = () => {
  const { lang } = useParams();
  return languages.includes(lang) ? <Outlet /> : <NotFoundPage />;
};

const initRoute = [
  { path: "/", element: <Navigate to="/en" replace /> },
  {
    path: "/:lang",
    element: <LanguageGuard />,
    children: [
      { index: true, element: <App /> },
      { path: "video", element: <VideoPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

const router = createBrowserRouter(initRoute);

export default router;
