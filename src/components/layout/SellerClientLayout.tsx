import React from "react";
import { calculateSellerLayout, Plan } from "@/utils/pricing";

type LayoutProps = {
  price: number;
  distance?: number;
  days?: number;
  plan: Plan;
};

export const SellerClientLayout: React.FC<LayoutProps> = ({
  price,
  distance = 0,
  days = 0,
  plan,
}) => {
  const layout = calculateSellerLayout(price, distance, days, plan);

  return (
    <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Bloc Client */}
      <div>
        <h2 className="text-lg font-bold text-blue-600 mb-3">Côté Client</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Prix produit :</span>
            <span>{layout.productPrice} $</span>
          </li>
          <li className="flex justify-between">
            <span>Frais & livraison :</span>
            <span>{layout.clientCommission} $</span>
          </li>
          <li className="flex justify-between font-bold border-t pt-2">
            <span>Total payé :</span>
            <span>{layout.totalClientPay} $</span>
          </li>
        </ul>
      </div>

      {/* Bloc Vendeur */}
      <div>
        <h2 className="text-lg font-bold text-green-600 mb-3">Côté Vendeur</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Prix produit :</span>
            <span>{layout.productPrice} $</span>
          </li>
          <li className="flex justify-between">
            <span>Commission plateforme ({plan}) :</span>
            <span>{layout.sellerCommission} $</span>
          </li>
          <li className="flex justify-between font-bold border-t pt-2">
            <span>Net vendeur :</span>
            <span>{layout.sellerNet} $</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
