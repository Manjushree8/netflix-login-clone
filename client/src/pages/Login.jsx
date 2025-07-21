import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      console.log("Sending POST to backend...");
      const res = await axios.post(
        "https://netflix-login-clone-backend.onrender.com/api/login",
        {
          email,
          password,
        }
      );

      console.log("Response:", res.data);

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="h-screen bg-black relative flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs8Ov5fkNkA4aKHabJCY0GO7JcC_PWgNMzx8fYPpsolN1oo76xvNN0uETzT0I6Yaj_sc&usqp=CAU"
        className="absolute h-full w-full object-cover opacity-60 blur-sm"
        alt="netflix bg"
      />

      {/* Overlay with form */}
      <div className="bg-black bg-opacity-75 p-10 rounded-lg w-[400px] z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Netflix</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 text-sm focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 text-sm focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4">
          New to Netflix?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
