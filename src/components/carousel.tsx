import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const LinkCarousel: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 1;

    const links = [
        <div key="first" className='flex flex-row '>
            <div className='text-slate-800 cursor-text'>
                20% OFF $100+ | 25% OFF $150+
            </div>
            <div className=' text-xs text-slate-800 mt-1 ml-3 cursor-pointer'>
                <Link href={'#'}>
                    <u className='underline underline-offset-2'>Use Code SPRING on select sale styles</u>
                </Link>
            </div>
        </div>,
        <div key="second" className='flex flex-row'>
            <div className='text-slate-800 text-center cursor-text'>
                FREE SHIPPING + RETURNS, FREE <br /> MEMBERSHIP, EXCLUSIVE PRODUCTS
            </div>
            <div className=' text-xs text-slate-800 mt-1 pl-14 pt-3 underline underline-offset-2 cursor-pointer'>
                <Link href={'#'}>
                    Join Now
                </Link>
            </div>
        </div>,
        <div key="third" className='flex flex-row'>
            <div className='text-slate-800 mt-2 cursor-text'>
                Why Wait? Try Store Pickup
            </div>
            <div className=' text-xs text-slate-800 mt-1 ml-3 font-underline text-center cursor-pointer'>
                Buy online and find a store near you for pick up <br /> in less than 2 hours. <Link href={'#'}><u className='underline underline-offset-2'>Shop Now</u></Link>
            </div>
        </div>
    ];

    const handleMinusClick = () => {
        if (currentPage === 0) {
            setCurrentPage(links.length - itemsPerPage);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePlusClick = () => {
        if (currentPage + itemsPerPage >= links.length) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handlePlusClick();
        }, 6000); // Rotate every 3 seconds (3000 ms)

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [currentPage]); // Re-run the effect when currentPage changes

    const displayedLinks = links.slice(currentPage, currentPage + itemsPerPage);

    return (
        <div className=' h-16 border-slate-200 border'>
            <div className="flex mx-auto flex-row items-center px-8 justify-center w-1/2 h-full">
                <button onClick={handleMinusClick}>
                    <div className="h-full cursor-pointer mr-4">
                        <AiOutlineLeft size="1rem" className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100 border-slate-900" />
                    </div>
                </button>
                <div className="flex w-full justify-center">
                    {displayedLinks.map((link, index) => (
                        <div key={index}>{link}</div>
                    ))}
                </div>
                <button onClick={handlePlusClick}>
                    <div className="h-full cursor-pointer ml-4 hover:fill-slate-900 hover:duration-100">
                        <AiOutlineRight size="1rem" className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100" />
                    </div>
                </button>
            </div>
        </div>

    );
};

export default LinkCarousel;
