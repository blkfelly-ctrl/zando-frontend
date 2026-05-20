import { useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-100 h-screen shadow-md transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <button
        className="p-2 w-full text-left hover:bg-gray-200"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "➡️" : "⬅️"}
      </button>

      <ul className="space-y-2 mt-4">
        <li>
          <Link to="/profile" className="block p-2 hover:bg-gray-200">
            {collapsed ? "👤" : "Mon Profil"}
          </Link>
        </li>
        <li>
          <Link to="/orders" className="block p-2 hover:bg-gray-200">
            {collapsed ? "📦" : "Mes Commandes"}
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="block p-2 hover:bg-gray-200">
            {collapsed ? "❤️" : "Favoris"}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block p-2 hover:bg-gray-200">
            {collapsed ? "⚙️" : "Paramètres"}
          </Link>
        </li>
      </ul>
    </aside>
  );
}
