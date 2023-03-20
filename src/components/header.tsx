import React from "react";
import Link from "next/link";
import Image from "next/image";

import nikeSwoosh from "../../public/nikeSwoosh.png";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <Image src={nikeSwoosh} alt="Outside of left shoe" width={50} height={50} />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="#">
                            <div className="text-gray-800 hover:text-gray-600">New & Featured</div>
                        </Link>
                        <Link href="#">
                            <div className="text-gray-800 hover:text-gray-600">Men</div>
                        </Link>
                        <Link href="#">
                            <div className="text-gray-800 hover:text-gray-600">Women</div>
                        </Link>
                        <Link href="#">
                            <div className="text-gray-800 hover:text-gray-600">Kids</div>
                        </Link>
                        <div className="relative">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-gray-500"
                                placeholder="Search"
                                disabled
                            />
                            <span className="absolute left-0 top-0 mt-3 ml-3 text-gray-500">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
