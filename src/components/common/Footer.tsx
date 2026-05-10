import { Link } from 'react-router-dom';
 
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ZANDO+</h3>
            <p className="text-gray-400">Le marché connecté, partout avec vous</p>
          </div>
 
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white">Tous les produits</Link></li>
              <li><Link to="/sellers" className="hover:text-white">Vendeurs</Link></li>
            </ul>
          </div>
 
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
 
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-white">Confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-white">Conditions</Link></li>
            </ul>
          </div>
        </div>
 
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ZANDO+. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
