import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';  // Adicionando a propriedade 'type'
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children, disabled = false, type = 'button' }) => {
  return (
    <button
      className={`btn ${variant} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}  // Definindo o 'type' do botão
    >
      {children}
    </button>
  );
};

export default Button;
