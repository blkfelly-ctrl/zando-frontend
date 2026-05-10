import React from 'react';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showSearchIcon?: boolean;
  validation?: {
    required?: boolean;
    pattern?: RegExp;
    message?: string;
  };
}

export function Input({ error, className = '', showSearchIcon = false, validation, ...props }: InputProps) {
  const [inputError, setInputError] = React.useState<string | undefined>(error);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validation) {
      const value = e.target.value;
      if (validation.required && !value) {
        setInputError(validation.message || 'Ce champ est requis');
      } else if (validation.pattern && !validation.pattern.test(value)) {
        setInputError(validation.message || 'Format invalide');
      } else {
        setInputError(undefined);
      }
    }
    props.onBlur?.(e);
  };

  return (
    <div className="w-full relative">
      {showSearchIcon && (
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      )}
      <input
        className={`w-full ${showSearchIcon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md ${className}`}
        {...props}
        onBlur={handleBlur}
      />
      {(inputError || error) && <p className="text-red-500 text-sm mt-1">{inputError || error}</p>}
    </div>
  );
}
