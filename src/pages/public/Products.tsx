import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Product } from '@/types';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { productService } from '@/lib/services/productService';

export function ProductBrowse() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Impossible de charger les produits.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Explorez les produits (compacité active)</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <Input
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            showSearchIcon
            validation={{
              pattern: /^.{3,}$/,
              message: 'La recherche doit contenir au moins 3 caractères',
            }}
          />
        </div>

        {loading && <p className="text-gray-500">Chargement des produits...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 gap-1">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-20 bg-gray-200">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-1 right-1 bg-white p-1 rounded-full hover:bg-gray-100 opacity-75">
                  <Heart className="w-3 h-3" />
                </button>
              </div>

              <CardContent className="p-2">
                <h3 className="font-semibold text-xs leading-tight mb-1 truncate" title={product.name}>{product.name}</h3>
                <p className="text-base font-bold text-primary mb-1">{product.price} FC</p>
                <Button className="w-full text-xs py-1" onClick={() => addItem(product, 1)}>
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Ajouter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
