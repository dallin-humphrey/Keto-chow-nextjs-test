import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

type Props = {
    onAddToBagClick: () => void;
};

const ButtonGroup: React.FC<Props> = ({ onAddToBagClick }) => {
    const [showAddedToBag, setShowAddedToBag] = useState(false);
    const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavoriteClicked((prevState) => !prevState);
    };

    const handleAddedToBagClick = () => {
        setShowAddedToBag(true);
        onAddToBagClick();
    };

    return (
        <div className="flex flex-col w-3/5 mt-6">
            <button
                className="rounded-full py-3 px-8 bg-black text-white text-lg font-normal transition-opacity hover:opacity-80"
                onClick={handleAddedToBagClick}
            >
                Add to Bag
            </button>
            {showAddedToBag && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg py-8 px-12 shadow-xl">
                        <p className="text-lg font-medium text-slate-800">Added to Bag</p>
                        <button
                            className="block mt-4 py-2 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                            onClick={() => setShowAddedToBag(false)}
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`border rounded-full py-2 px-6 mt-2 text-lg font-medium transition-colors ${isFavoriteClicked ? 'bg-red-400 text-white border-red-400' : 'bg-white text-slate-800 border-slate-300'
                    } ${isFavoriteClicked ? 'hover:border-red-400 hover:text-white' : 'hover:border-slate-600 hover:text-black'}`}
                onClick={handleFavoriteClick}
            >
                <div className="flex items-center justify-center">
                    <div className='mr-2'>Favorite</div>
                    <div className="">{isFavoriteClicked ? '❤️' : '♡'}</div>
                </div>
            </button>

        </div>
    );
};

export default ButtonGroup;
