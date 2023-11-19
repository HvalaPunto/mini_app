// src/components/ColorChanger.tsx
import React, { useState } from 'react';
import ColorButton from './ColorButton';

const colors = ['red', 'green', 'blue'];

const ColorChanger: React.FC = () => {
    const [currentColor, setCurrentColor] = useState<string>('');

    const changeColor = (newColor: string) => {
        setCurrentColor(newColor);
    };

    return (
        <div>
            <h1>Color Changer</h1>
            <p>Selected Color: {currentColor}</p>
            <div>
                {colors.map((color) => (
                    <ColorButton key={color} color={color} onClick={() => changeColor(color)} />
                ))}
            </div>
        </div>
    );
};

export default ColorChanger;
