import React, { useState } from 'react';
import { MdOutlineTimer } from 'react-icons/md';

type Size = {
    size: number;
    stock: number;
};

const ShoeSizeSelector: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const sizes: Size[] = [
        { size: 6, stock: 30 },
        { size: 6.5, stock: 40 },
        { size: 7, stock: 70 },
        { size: 7.5, stock: 42 },
        { size: 8, stock: 22 },
        { size: 8.5, stock: 1 },
        { size: 9, stock: 4 },
        { size: 9.5, stock: 3 },
        { size: 10, stock: 3 },
        { size: 10.5, stock: 2 },
        { size: 11, stock: 1 },
        { size: 11.5, stock: 6 },
        { size: 12, stock: 4 },
        { size: 12.5, stock: 2 },
        { size: 13, stock: 3 },
        { size: 14, stock: 1 },
        { size: 15, stock: 10 },
        { size: 16, stock: 0 },
        { size: 17, stock: 0 },
        { size: 18, stock: 0 },
        { size: 19, stock: 0 },
    ];

    const handleSizeSelect = (size: Size) => {
        if (size.stock > 0) {
            setSelectedSize(size.size);
        }
    };

    const selectedSizeObject = sizes.find((size) => size.size === selectedSize);

    return (
        <div className="shoe-size-selector w-3/5">
            {selectedSizeObject && selectedSizeObject.stock < 5 && (
                <div className="text-sm text-yellow-500 mt-2 flex items-center">
                    <MdOutlineTimer size={'1.2rem'} />
                    <div className="ml-2">Just a few left. Order Soon.</div>
                </div>
            )}
            <h3 className="text-lg font-medium mb-2 mt-6 text-slate-800">Select a size:</h3>
            <div className="grid grid-cols-5 gap-2">
                {sizes.map((size, index) => (
                    <div
                        key={index}
                        className={`py-2 px-4 text-center text-sm font-medium border border-gray-300 rounded-lg cursor-pointer ${size.stock === 0 ? ' text-slate-300 cursor-default' : ''
                            } ${selectedSize === size.size ? 'border border-slate-800' : ''}`}
                        onClick={() => handleSizeSelect(size)}
                    >
                        {size.size}
                        {size.stock === 0 ? (
                            <span className="block text-xs text-gray-500 mt-1 cursor-default"></span>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoeSizeSelector;
