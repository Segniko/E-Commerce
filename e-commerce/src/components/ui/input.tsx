import React from 'react';

interface InputProps {
  id: string; 
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, type = "text", placeholder, onChange, className }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`border rounded p-2 ${className}`}
    />
  );
};

export default Input;
