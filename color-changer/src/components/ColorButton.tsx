// src/components/ColorButton.tsx
import React from 'react';

interface ColorButtonProps {
    color: string;
    onClick: () => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color, padding: '10px', margin: '5px', cursor: 'pointer' }}
            onClick={onClick}
        >
            {color}
        </button>
    );
};

export default ColorButton;
