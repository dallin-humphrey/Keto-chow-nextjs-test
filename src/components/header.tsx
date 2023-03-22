import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineSearch } from 'react-icons/ai';

import nikeSwoosh from "../../public/nikeSwoosh.png";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className=" w-52">
                        <Image src={nikeSwoosh} alt="Outside of left shoe" width={50} height={50} />
                    </div>
                    <div className="flex items-center space-x-4 pl-42">
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">New & Featured</div>
                        </Link>
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">Men</div>
                        </Link>
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">Women</div>
                        </Link>
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">Kids</div>
                        </Link>
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">Accessories</div>
                        </Link>
                        <Link href="#">
                            <div className="text-slate-800 hover:text-slate-600">Sale</div>
                        </Link>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="border border-slate-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-slate-500"
                            placeholder="Search"
                        />
                        <span className="absolute left-1 top-1 mt-2.5 ml-3 text-slate-500">
                            <AiOutlineSearch size="1rem" className="curser-pointer text-primary fill-slate-400 hover:fill-slate-900 hover:duration-100" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
