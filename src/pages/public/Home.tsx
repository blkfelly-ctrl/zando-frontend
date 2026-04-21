import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ShoppingBag, Truck, CreditCard, Star } from 'lucide-react';
 
export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">ZANDO+</h1>
          <p className="text-xl mb-8 opacity-90">Le marché connecté, partout avec vous</p>
          <Link to="/products">
            <Button size="lg">Découvrir les produits</Button>
          </Link>
        </div>
      </section>
 
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi ZANDO+</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card>
              <CardContent className="pt-6 text-center">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Achetez localement</h3>
                <p className="text-gray-600">Découvrez les meilleurs produits de votre ville</p>
              </CardContent>
            </Card>
 
            {/* Feature 2 */}
            <Card>
              <CardContent className="pt-6 text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-lg font-semibold mb-2">Livraison rapide</h3>
                <p className="text-gray-600">Recevez vos commandes en 24-48 heures</p>
              </CardContent>
            </Card>
 
            {/* Feature 3 */}
            <Card>
              <CardContent className="pt-6 text-center">
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Paiement sécurisé</h3>
                <p className="text-gray-600">Payez avec Stripe, Orange Money ou Airtel Money</p>
              </CardContent>
            </Card>
 
            {/* Feature 4 */}
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-warning" />
                <h3 className="text-lg font-semibold mb-2">Avis vérifiés</h3>
                <p className="text-gray-600">Consultez les avis d'autres acheteurs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-16 bg-primary text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-lg mb-8">Rejoignez des milliers de clients satisfaits</p>
          <Link to="/products">
            <Button variant="secondary" size="lg">Commencer maintenant</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
