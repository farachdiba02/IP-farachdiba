import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "../components/Register";
import HomePage from "../views/HomePage";
import Leaderboard from "../components/Leaderboard";
import Surah from "../components/Surah";
import Verse from "../components/Verse";
import LandingPage from "../views/LandingPage";
const router = createBrowserRouter([
  {
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/home");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/question-surah",
        element: <Surah />,
      },
      {
        path: "/question-verse",
        element: <Verse />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

export default router;
