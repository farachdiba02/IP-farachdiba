import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <div className="navbar bg-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Leaderboards</a>
            </li>
            <li>
              <a>Quizzes</a>
              <ul className="p-2">
                <li>
                  <a>Surah</a>
                </li>
                <li>
                  <a>Verse</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost text-xl">
          Qurizziz
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/leaderboard">Leaderboards</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Quizzes</summary>
              <ul className="p-1">
                <li>
                  <Link to="/question-surah">Surah Juz 30</Link>
                </li>
                <li>
                  <Link to="/question-verse">Verse Juz 26-30</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gray-400" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;
