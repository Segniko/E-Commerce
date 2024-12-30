import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> & {
    Header: React.FC<{ children: React.ReactNode; className?: string }>; 
    Title: React.FC<{ children: React.ReactNode; className?: string }>; 
    Content: React.FC<{ children: React.ReactNode; className?: string }>; 
} = ({ children, className }) => {
    return (
        <div className={`card ${className}`}>{children}</div>
    );
};

Card.Header = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <div className={`card-header ${className}`}>{children}</div>;
Card.Title = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <h2 className={`card-title ${className}`}>{children}</h2>;
Card.Content = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <div className={`card-content ${className}`}>{children}</div>;

export default Card;
