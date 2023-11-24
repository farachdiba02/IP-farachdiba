// const LandingPage = () => {
//   return (
//     <div
//       className="bg-gray-100"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1541140134513-85a161dc4a00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//       }}
//     >
//       <div className="flex flex-row h-screen">
//         {/* Bagian Kiri: Judul dan Deskripsi */}
//         <div className="flex flex-col justify-center items-start w-1/2 p-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Welcome to Qurizziz
//           </h1>
//           <p className="text-lg text-gray-700 mb-8">
//             Please Login to play the Quiz
//           </p>
//         </div>

import GoogleButton from "../components/GoogleButton";

//         {/* Bagian Kanan: Form Login */}
//         <div className="flex flex-col justify-center items-center w-1/2 p-8">
//           {/* Tambahkan Form Login di sini */}
//           <form className="w-full max-w-sm">
//             {/* Tambahkan elemen input, label, dll. untuk form login */}
//             <div className="mb-4">
//               <label
//                 htmlFor="username"
//                 className="block text-gray-700 text-sm font-bold mb-2 text-justify"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your username"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2 text-justify"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LandingPage = () => {
  const BASE_URL = "http://localhost:3000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      //   console.log(response);
      const access_token = response.data.access_token;
      //   console.log(access_token);
      localStorage.setItem("access_token", access_token);
      navigate("/home");
    } catch (error) {
      // console.log(error);
      Swal.fire({
        target: "#cust-swal-container",
        title: `${error.response.data.message}`,
        width: "300px",
        position: "top-end",
        timer: 2000,
        // confirmButtonText: "Ok",
        showConfirmButton: false,
        background: "linear-gradient(to right, #900C3F, #F94C10)",
      });
    }
  };
  return (
    <div
      className="bg-gray-500 h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1624345690966-db232a144397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-row h-screen">
        {/* Bagian Kiri: Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-start w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Qurizziz
          </h1>
          <p className="text-lg text-gray-800 mb-4 font-semibold">
            Please Login to start the Quiz
          </p>
        </div>

        {/* Bagian Kanan: Form Login */}

        <div className="flex flex-col justify-center items-center w-1/2 p-8">
          {/* Tambahkan Form Login di sini */}
          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            {/* Tambahkan elemen input, label, dll. untuk form login */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm font-bold mb-2 text-justify"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-800 text-sm font-bold mb-2 text-justify"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5"
            >
              Login
            </button>

            <p className="text-gray-800 mb-3 text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-gray-800 underline font-bold"
              >
                Register
              </Link>
            </p>
            <p className="text-gray-800 mb-3">OR</p>
            <div className="flex justify-center">
              <GoogleButton />
            </div>
          </form>
        </div>
      </div>
      <div id="cust-swal-container"></div>
    </div>
  );
};

export default LandingPage;
