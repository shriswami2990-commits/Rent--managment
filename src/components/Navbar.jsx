import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white p-2 shadow">
      <Link to="/">🏠</Link>
      <Link to="/tenants">👤</Link>
      <Link to="/rent">💰</Link>
      <Link to="/reports">📊</Link>
    </div>
  );
}
