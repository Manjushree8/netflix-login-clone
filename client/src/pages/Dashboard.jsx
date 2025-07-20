import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        <span className="text-red-600">Netflix</span> didn’t hire me yet… <br />so I made my own 😎
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 font-semibold transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
