import { createBrowserRouter } from "react-router-dom";
import Home from "../view/landingpage/Home";
import BMI from "../view/landingpage/BMI";
import App from "../App";
import WorkoutDetection from "../view/landingpage/WorkoutDetection";
import ProgressStats from "../view/landingpage/ProgressStats";
import WorkoutPlans from "../view/landingpage/WorkoutPlans";
import Leaderboard from "../view/landingpage/Leaderboard";
import Login from "../view/login/Login";
import Register from "../view/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "bmi",
        element: <BMI />,
      },
      {
        path: "WorkoutDetection",
        element: <WorkoutDetection />,
      },
      {
        path: "ProgressStats",
        element: <ProgressStats />,
      },
      {
        path: "WorkoutPlans",
        element: <WorkoutPlans />,
      },
      {
        path: "Leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
]);

export default router;