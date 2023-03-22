import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

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
import Link from "next/link";
import Dropdown from "./dropDown";

const ImageColumn: React.FC = (props) => {
    return (
        <div className="flex justify-center gap-4 mt-6 relative">
            <div className="ml-96">
                <div className="grid gap-4 pl-52 relative">
                    <div className="flex justify-end absolute top-4 -left-10">
                        <div className="text-xs flex bg-slate-200 rounded-lg px-2 py-1">
                            <AiFillStar className="mr-1" size={'1rem'} />Highly Rated
                        </div>
                    </div>
                    <div className=" flex justify-end">
                        <Image className="cursor-not-allowed" src={shoeOne} alt="Outside of left shoe" width={320} height={320} />
                        <Image className="px-4 cursor-pointer" src={shoeTwo} alt="Legs in the shoes" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image className="cursor-not-allowed" src={shoeThree} alt="Bottom of left shoe" width={320} height={320} />
                        <Image className="px-4 cursor-not-allowed" src={shoeFour} alt="Outside of right shoe" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image className="cursor-not-allowed" src={shoeFive} alt="Top view of both shoes" width={320} height={320} />
                        <Image className="px-4 cursor-not-allowed" src={shoeSix} alt="Both shoes side by side view is from an angle" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image className="cursor-not-allowed" src={shoeSeven} alt="Both shoes side by side view is from the back" width={320} height={320} />
                        <Image className="px-4 cursor-not-allowed" src={shoeEight} alt="Zoom in of the front material" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image src={shoeNine} alt="Zoom in of back of left shoe heel" width={320} height={320} />
                        <Image className="px-4 opacity-0" src={shoeNine} alt="Zoom in of back of left shoe heel" width={320} height={320} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex-col">
                <div className="text-2xl text-slate-900">Nike Air Max 90</div>
                <div className="text-sm text-slate-700">Men&lsquo;s Shoes</div>

                <div className="text-md text-slate-700 mt-2">
                    $130
                </div>
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

export default ImageColumn;