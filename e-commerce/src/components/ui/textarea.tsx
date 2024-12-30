import React from 'react';

interface TextareaProps {
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, placeholder, rows = 4, cols = 50, id, className }) => {
    return (
        <textarea
            className={className}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            style={{ width: '100%', resize: 'vertical' }}
        />
    );
};

export default Textarea;
