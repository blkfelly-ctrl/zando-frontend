
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
 
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-primary">
          ZANDO+
        </Link>
 
        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link to="/products" className="text-gray-700 hover:text-primary transition">
            Produits
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition">
            À propos
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition">
            Contact
          </Link>
        </nav>
 
        {/* Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary transition" />
          </Link>
          <Link to="/profile">
            <User className="w-6 h-6 text-gray-700 hover:text-primary transition" />
          </Link>
          <Button size="sm">Se connecter</Button>
        </div>
 
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t p-4 space-y-4">
          <Link to="/products" className="block text-gray-700 hover:text-primary">
            Produits
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-primary">
            À propos
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-primary">
            Contact
          </Link>
          <Button className="w-full">Se connecter</Button>
        </div>
      )}
    </header>
  );
}
