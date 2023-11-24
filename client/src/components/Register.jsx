import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  //   console.log("hehehe");
  const BASE_URL = "http://localhost:3000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   console.log(password);
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
      });
      navigate("/home");
    } catch (error) {
      // console.log(error, 21);
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
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-gray-800 font-semibold mb-4">Register</h2>
        <form className="w-full" onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm font-bold mb-2"
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
              className="block text-gray-800 text-sm font-bold mb-2"
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
            Register
          </button>

          <p className="text-gray-800 text-center">
            Already have an account?{" "}
            <Link to="/" className="text-gray-800 underline font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div id="cust-swal-container"></div>
    </div>
  );
};

export default Register;
