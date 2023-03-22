import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Dropdown: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative my-4 w-9/10 ${title === 'Reviews' ? 'mb-20' : ''}`}>
            <button
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                onClick={() => setOpen(!open)}
            >
                {title === 'Reviews' ? 'Leave a review' : title}
                <span className="ml-2">{open ? <AiOutlineUp size="1.2rem" /> : <AiOutlineDown size="1.2rem" />}</span>
            </button>

            {open && (
                <div className="absolute z-50 right-0 w-full py-2 mt-2 bg-white rounded-md shadow-lg">
                    {title === 'Free Shipping & Returns' ? (
                        <p className="block px-4 py-2 text-sm text-slate-700">{`Free standard shipping and free 60-day returns for Nike Members. Learn more. Return policy exclusions apply.\nPick-up available at select Nike Stores.`}</p>
                    ) : (
                        <p className="block px-4 py-2 text-sm text-slate-700">Leave a review here</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
