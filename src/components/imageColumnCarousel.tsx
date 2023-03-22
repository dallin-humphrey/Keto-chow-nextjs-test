import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import shoeOne from "../../public/shoeOne.png";
import shoeTwo from "../../public/shoeTwo.png";
import shoeThree from "../../public/shoeThree.png";
import shoeFour from "../../public/shoeFour.png";
import shoeFive from "../../public/shoeFive.png";
import shoeSix from "../../public/shoeSix.png";
import shoeSeven from "../../public/shoeSeven.png";
import shoeEight from "../../public/shoeEight.png";
import shoeNine from "../../public/shoeNine.png";
import ShoeSizeSelector from "./shoeSizeSelector";
import StyleSelector from "./styleSelector";
import ButtonGroup from "./buttonGroup";
import Dropdown from "./dropDown";
import Link from "next/link";

const ImageColumnCarousel: React.FC = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailImages: StaticImageData[] = [
        shoeOne,
        shoeTwo,
        shoeThree,
        shoeFour,
        shoeFive,
        shoeSix,
        shoeSeven,
        shoeEight,
        shoeNine,
    ];

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handlePrevButtonClick = () => {
        const newIndex = currentIndex === 0 ? thumbnailImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNextButtonClick = () => {
        const newIndex = currentIndex === thumbnailImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentImage = thumbnailImages[currentIndex];

    return (
        <div className="flex justify-center mt-6 relative ml-96">
            <div className="flex flex-col items-center mr-4">
                {thumbnailImages.map((image, index) => (
                    <div
                        key={index}
                        className={`w-12 h-12 relative cursor-pointer my-1 ${currentImage === image ? "ring-2 ring-blue-500" : ""
                            }`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <Image src={image} alt={`Thumbnail ${index}`} layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className="relative w-96 h-full">
                <div className="absolute bottom-0 right-10 mr-2 mb-2">
                    <button className="p-1 bg-slate-50 rounded-full mr-2" onClick={handlePrevButtonClick}>
                        <AiOutlineLeft
                            size="1.5rem"
                            className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100 border-slate-900"
                        />
                    </button>
                    <button className="p-1 bg-slate-50 rounded-full mr-2" onClick={handleNextButtonClick}>
                        <AiOutlineRight
                            size="1.5rem"
                            className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100 border-slate-900"
                        />
                    </button>
                </div>
                <div className="flex justify-end absolute top-2 left-2">
                    <div className="text-xs flex bg-slate-200 rounded-lg px-2 py-1">
                        <AiFillStar className="mr-1" size={"1rem"} />
                        Highly Rated
                    </div>
                </div>
                <Image className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100 border-slate-900" src={currentImage} alt="Shoe" width={380} height={380} />
            </div>
            <div className="col-span-1 flex-col ml-12">
                <div className="text-2xl text-slate-900">Nike Air Max 90</div>
                <div className="text-sm text-slate-700">Men&lsquo;s Shoes</div>
                <div className="text-md text-slate-700 mt-2">$130</div>
                <StyleSelector />
                <ShoeSizeSelector />
                <ButtonGroup onAddToBagClick={() => console.log("Added to cart")} />
                <div className="text-sm text-slate-700 mt-8 w-3/5 h-48">
                    <div className='text-slate-700 pb-1'>
                        Shipping*
                    </div>
                    <div className='text-slate-700 pb-4'>
                        To get accurate shipping information Edit Location*
                    </div>
                    <div className='text-slate-700 pb-1'>
                        Free Pickup
                    </div>
                    <div className='text-slate-700 pb-2'>
                        Find a Store
                    </div>
                    <div className='text-slate-500 pb-10 text-xs'>
                        *Faster Shipping options may be available
                    </div>
                    <div className='text-slate-700 pb-4'>
                        Nothing as fly, nothing as comfortable,<br />
                        nothing as proven. The Nike Air Max 90<br />
                        stays true to its OG running roots with<br />
                        the iconic Waffle sole, stitched<br />
                        overlays and classic TPU details.<br />
                        Classic colors celebrate your fresh<br />
                        look while Max Air cushioning adds<br />
                        comfort to the journey.<br />
                    </div>
                    <div className='text-slate-700 pb-1'>
                        <li>
                            Shown: Wolf Grey/Black/White/Black
                        </li>
                    </div>
                    <div className='test-slate-700 pb-4'>
                        <li>
                            Style: CN8490-001
                        </li>
                    </div>
                    <div className='text-slate-700 pb-6'>
                        <Link href="#">
                            <u>
                                View Product Details
                            </u>
                        </Link>
                    </div>
                    <Dropdown
                        title="Free Shipping & Returns"
                        items={["Learn More", "Join Now"]}
                    />
                    <div className="pb-24">
                        <Dropdown
                            title="Reviews"
                            items={["Sort by: Newest", "Sort by: Helpful", "View All"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageColumnCarousel;
