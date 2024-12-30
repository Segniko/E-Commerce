"use client";

import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    size?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = 'button', size }) => {
    const sizeClass = size ? `btn-${size}` : '';
    return (
        <button onClick={onClick} className={`btn ${sizeClass} ${className}`} type={type}>
            {children}
        </button>
    );
};

export default Button;
