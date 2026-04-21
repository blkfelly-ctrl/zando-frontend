import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
 
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
 
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
 
  const variantStyles = {
    primary: 'bg-primary text-black hover:bg-yellow-600 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-green-700 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-black',
    ghost: 'hover:bg-gray-100 text-gray-900',
    danger: 'bg-danger text-white hover:bg-red-700 focus:ring-danger',
  };
 
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
 
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
          Chargement...
        </>
      ) : (
        children
      )}
    </button>
  );
}
