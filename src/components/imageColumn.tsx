import React from "react";
import Image from "next/image";

import shoeOne from "../../public/shoeOne.png";
import shoeTwo from "../../public/shoeTwo.png";
import shoeThree from "../../public/shoeThree.png";
import shoeFour from "../../public/shoeFour.png";
import shoeFive from "../../public/shoeFive.png";
import shoeSix from "../../public/shoeSix.png";
import shoeSeven from "../../public/shoeSeven.png";
import shoeEight from "../../public/shoeEight.png";
import shoeNine from "../../public/shoeNine.png";

const ImageColumn: React.FC = (props) => {
    return (
        <>
            <div className="grid grid-cols-2 mt-6">
                <div className=" w-full grid grid-rows-5 justify-end">
                    <div className="flex mb-4">
                        <Image className="mr-4 cursor-not-allowed" src={shoeOne} alt="Side of shoe" width={320} height={320} />
                        <Image className="cursor-pointer" src={shoeTwo} alt="Side of shoe" width={320} height={320} />
                    </div>
                    <div className="flex mb-4">
                        <Image className="mr-4 cursor-not-allowed" src={shoeThree} alt="Side of shoe" width={320} height={320} />
                        <Image className="mr-4 cursor-not-allowed" src={shoeFour} alt="Side of shoe" width={320} height={320} />
                    </div>
                    <div className="flex mb-4">
                        <Image className="mr-4 cursor-not-allowed" src={shoeFive} alt="Side of shoe" width={320} height={320} />
                        <Image className="mr-4 cursor-not-allowed" src={shoeSix} alt="Side of shoe" width={320} height={320} />
                    </div>
                    <div className="flex mb-4">
                        <Image className="mr-4 cursor-not-allowed" src={shoeSeven} alt="Side of shoe" width={320} height={320} />
                        <Image className="mr-4 cursor-not-allowed" src={shoeEight} alt="Side of shoe" width={320} height={320} />
                    </div>
                    <div className="flex mb-4">
                        <Image className="mr-4 cursor-not-allowed" src={shoeNine} alt="Side of shoe" width={320} height={320} />
                    </div>
                </div>
                <div className="w-full grid grid-rows-5 justify-start">
                    Nike Air Max 90
                </div>
            </div>
            <div>

            </div>

        </>
    );
};

export default ImageColumn;