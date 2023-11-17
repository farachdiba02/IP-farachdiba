import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import HomePage from "../views/HomePage";
import Leaderboard from "../components/Leaderboard";
import Surah from "../components/Surah";
import Verse from "../components/Verse";
import LandingPage from "../views/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
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
]);

export default router;
