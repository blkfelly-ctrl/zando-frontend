export type Plan = "basic" | "standard" | "premium";
export function getSellerCommissionRate(plan: Plan): number {
  switch (plan) {
    case "basic": return 0.02;
    case "standard": return 0.03;
    case "premium": return 0.05;
    default: return 0.02;
  }
}

export function calculateSellerLayout(
  price: number,
  distance: number = 0,
  days: number = 0,
  plan: Plan = "basic"
) {
  const BASE_RATE = 0.05;
  const DISTANCE_RATE = 0.04;
  const DURATION_RATE = 0.01;

  const distancePercentage = (distance / 100) * DISTANCE_RATE;
  const durationPercentage = days * DURATION_RATE;
  const totalRate = BASE_RATE + distancePercentage + durationPercentage;

  const clientCommission = Math.round(price * totalRate);
  const totalClientPay = price + clientCommission;

  const sellerRate = getSellerCommissionRate(plan);
  const sellerCommission = Math.round(price * sellerRate);
  const sellerNet = price - sellerCommission;

  return {
    productPrice: price,
    clientCommission,
    totalClientPay,
    sellerCommission,
    sellerNet,
  };
}
