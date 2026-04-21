export type UserRole = 'buyer' | 'seller' | 'livreur' | 'admin';
export type ProductPortee = 'local' | 'livrable';
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentMethod = 'stripe' | 'orange_money' | 'airtel_money';
 
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
 
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  portee: ProductPortee;
  vendeurId: string;
  vendeur?: Seller;
  ville: string;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
 
export interface Seller {
  id: string;
  userId: string;
  storeName: string;
  description: string;
  logo?: string;
  rating: number;
  reviews: number;
  verified: boolean;
  subscription: 'free' | 'standard' | 'premium';
  createdAt: Date;
}
 
export interface CartItem {
  productId: string;
  product?: Product;
  quantity: number;
  price: number;
}
 
export interface Order {
  id: string;
  acheteurId: string;
  vendeurId: string;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  commission: number;
  paymentMethod: PaymentMethod;
  shippingAddress: string;
  createdAt: Date;
  updatedAt: Date;
}
 
export interface Commission {
  id: string;
  orderId: string;
  vendeurId: string;
  amount: number;
  rate: number;
  distance?: number;
  duration?: number;
  calculatedAt: Date;
}
 
export interface Review {
  id: string;
  productId: string;
  acheteurId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
