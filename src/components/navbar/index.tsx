'use client';

import React from "react";
import { NavbarProps } from "@/interfaces";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOut } from "@fortawesome/free-solid-svg-icons";


export const Navbar: React.FC<NavbarProps> = ({ title }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
        <nav className="bg-teal-600">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
                </div>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onBlur={() => setIsDropdownOpen(false)}
                        aria-expanded={isDropdownOpen}
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom">
                        <div className="w-10 h-10 rounded-full border border-white text-center flex items-center justify-center uppercase">BG</div>
                    </button>
                    <div className={`z-50 ${isDropdownOpen ? 'absolute top-12 right-4' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">bgreen@iplantask.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <FontAwesomeIcon icon={faCog} className="pr-1"/>
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <FontAwesomeIcon icon={faSignOut} className="pr-1"/>
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};