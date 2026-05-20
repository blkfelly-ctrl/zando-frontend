import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-2 flex items-center justify-between">
      <Link to="/" className="font-bold text-primary">
        ZANDO+
      </Link>

      {/* Menu desktop */}
      <div className="hidden md:flex gap-6">
        <Link to="/products" className="hover:text-primary">Produits</Link>
        <Link to="/cart" className="hover:text-primary">Panier</Link>
        <Link to="/seller/dashboard" className="hover:text-primary">Vendeur</Link>
        <Link to="/admin/dashboard" className="hover:text-primary">Admin</Link>
      </div>

      {/* Burger menu mobile */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden">
          <Link to="/products" className="p-2 hover:bg-gray-100">Produits</Link>
          <Link to="/cart" className="p-2 hover:bg-gray-100">Panier</Link>
          <Link to="/seller/dashboard" className="p-2 hover:bg-gray-100">Vendeur</Link>
          <Link to="/admin/dashboard" className="p-2 hover:bg-gray-100">Admin</Link>
        </div>
      )}
    </nav>
  );
}
