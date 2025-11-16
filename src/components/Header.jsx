import { useState } from 'react';
import { Link, Links } from 'react-router';

export default function Header({ home = false, products = false, about = false, contact = false }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full py-6 px-6 sm:px-12 flex justify-between items-center text-white relative">


            <h1
                className="text-3xl sm:text-4xl tracking-widest"
                style={{ fontFamily: 'bebas' }}
            >
                SNIFF IT
            </h1>


            <nav className="hidden md:block">
                <ul className="flex gap-10 text-lg font-light">
                    {home && <Link to={'/'}> <li className="cursor-pointer hover:text-gray-300">Home</li></Link>}
                    {products && <Link to={'/product'}> <li className="cursor-pointer hover:text-gray-300">Our Products</li></Link>}
                    {about && <Link to={'/about'}><li className="cursor-pointer hover:text-gray-300">About</li></Link>}
                    {contact && <Link to={'/contact'}><li className="cursor-pointer hover:text-gray-300">Contact</li></Link>}
                </ul>
            </nav>


            <div className="flex items-center gap-4 md:gap-6">

                <img
                    className="cursor-pointer"
                    src="/shopping-cart_5990149.png"
                    width="35px"
                />


                <button
                    className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>


            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 md:hidden z-10">
                    <ul className="flex flex-col gap-6 text-lg font-light text-center">
                        {home && <Link to={'/'}> <li className="cursor-pointer hover:text-gray-300">Home</li></Link>}
                        {products && <Link to={'/product'}> <li className="cursor-pointer hover:text-gray-300">Our Products</li></Link>}
                        {about && <Link to={'/about'}><li className="cursor-pointer hover:text-gray-300">About</li></Link>}
                        {contact && <Link to={'/contact'}> <li className="cursor-pointer hover:text-gray-300">Contact</li></Link>}
                    </ul>
                </div>
            )}

        </header>
    );
}
