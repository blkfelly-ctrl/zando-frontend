// Combine classes Tailwind de manière sûre
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Formater un prix en USD (tu peux changer la locale et la devise)
export function formatPrice(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(amount);
}

// Formater une date lisible
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Générer un identifiant unique simple
export function uid(prefix: string = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
