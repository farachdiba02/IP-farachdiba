import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GoogleButton = () => {
  const navigate = useNavigate();
  async function handleGoogleLogin(codeResponse) {
    const BASE_URL = "http://localhost:3000";
    try {
      const { data } = await axios.post(`${BASE_URL}/google-login`, null, {
        headers: {
          token: codeResponse.credential,
        },
      });
      //   console.log(data);
      const access_token = data.access_token;
      // console.log(access_token);
      localStorage.setItem("access_token", access_token);
      //   console.log(access_token);
      navigate("/home");
    } catch (error) {
      console.log(error, 15);
    }
  }
  return (
    <>
      <GoogleLogin onSuccess={handleGoogleLogin} />
    </>
  );
};

export default GoogleButton;
