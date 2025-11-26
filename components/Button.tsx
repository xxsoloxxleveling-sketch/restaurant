import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-gold-500 text-white border border-gold-500 hover:bg-gold-600 hover:border-gold-600 shadow-lg",
    outline: "bg-transparent text-gold-400 border border-gold-400 hover:bg-gold-500 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;