import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "default";
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={cn(
        "rounded font-semibold transition-colors",
        variant === "primary" && "bg-primary text-black hover:bg-yellow-600",
        variant === "secondary" && "bg-secondary text-white hover:bg-green-700",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" && "border border-gray-300 text-gray-700 hover:bg-gray-50",
        sizes[size],
        className
      )}
    />
  );
}
