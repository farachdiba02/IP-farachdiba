import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const BASE_URL = "http://localhost:3000";
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUsers(data.data);
      //   console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="navbar bg-gray-400" style={{ marginBottom: "45px" }}>
        <Navbar />
      </div>
      <div className="overflow-x-auto font-semibold">
        <p
          className="font-bold text-center justify-around mb-4"
          style={{ fontSize: "25px" }}
        >
          Leaderboards
        </p>
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th
                className="text-center font-bold "
                style={{ fontSize: "15px" }}
              >
                No
              </th>
              <th
                className="text-center font-bold "
                style={{ fontSize: "15px" }}
              >
                User
              </th>
              <th
                className="text-center font-bold "
                style={{ fontSize: "15px" }}
              >
                Point
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr className="bg-gray-400" key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
