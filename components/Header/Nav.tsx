import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { cathegories } from './cathegories';
import girosLogo from '../static/logo_giros_green.png'
import MenuIcon from './MenuIcon';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cathegoryListItems = cathegories.map((cat, idx) => (
        <li key={idx} className='link text-xl'>
            <Link href={`/cathegories${cat.link}`}>
                <a
                    aria-label="Our product"
                    title="Our product"
                    className="text-primary font-bold  link-highlight-green"
                >
                    {cat.title.toUpperCase()}
                </a>
            </Link>
        </li>
    ))

    return (
        <div className='fixed top-0 z-[1030] w-full'>
            <div className="mx-auto relative py-3 flex justify-evenly items-center lg:space-x-16 bg-giros-card-gray">
                <ul className="hidden space-x-8 lg:flex lg:justify-evenly">
                    {cathegoryListItems.slice(0, Math.floor(cathegories.length / 2))}
                </ul>
                <Link href="/"><a
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <span className="ml-2 text-xl font-bold  text-gray-800 uppercase">
                        <Image
                            src={girosLogo}
                            alt={"giros logo"}
                            width={150}
                            height={70}
                        />
                    </span>
                </a></Link>
                <ul className="hidden space-x-8 lg:flex lg:justify-evenly">
                    {cathegoryListItems.slice(Math.floor(cathegories.length / 2), cathegories.length - 1)}
                </ul>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full z-10">
                        <div className="p-5 bg-giros-card-gray border border-highlight rounded shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg className="w-5 text-giros-reading-gray" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className="space-y-4">
                                    {cathegoryListItems}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
                <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </div>
    );
};