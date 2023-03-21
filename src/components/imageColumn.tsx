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
                        <Image src={shoeOne} alt="Outside of left shoe" width={320} height={320} />
                        <Image className="px-4" src={shoeTwo} alt="Legs in the shoes" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image src={shoeThree} alt="Bottom of left shoe" width={320} height={320} />
                        <Image className="px-4" src={shoeFour} alt="Outside of right shoe" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image src={shoeFive} alt="Top view of both shoes" width={320} height={320} />
                        <Image className="px-4" src={shoeSix} alt="Both shoes side by side view is from an angle" width={320} height={320} />
                    </div>
                    <div className="flex justify-end">
                        <Image src={shoeSeven} alt="Both shoes side by side view is from the back" width={320} height={320} />
                        <Image className="px-4" src={shoeEight} alt="Zoom in of the front material" width={320} height={320} />
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
            </div>
        </div>
    );
};



export default ImageColumn;