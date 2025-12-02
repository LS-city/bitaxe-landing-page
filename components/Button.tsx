import React from 'react';
import { AFFILIATE_LINK } from '../constants';

interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text = "Get Your Bitaxe Now", 
  fullWidth = false, 
  className = "",
  variant = 'primary',
  onClick
}) => {
  const baseClasses = "font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg uppercase tracking-wide text-center";
  const variants = {
    primary: "bg-[#FF6B00] hover:bg-[#e65e00] text-white shadow-orange-900/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
  };

  const Component = onClick ? 'button' : 'a';
  const props = onClick ? { onClick } : { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer" };

  return (
    // @ts-ignore
    <Component 
      {...props}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full block' : ''} ${className}`}
    >
      {text}
    </Component>
  );
};

export default Button;