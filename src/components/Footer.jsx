import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-black text-white text-center py-12 px-6 md:px-12 border-t border-gray-800">

            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

                
                <h1
                    className="text-3xl font-bold tracking-widest"
                    style={{ fontFamily: 'bebas' }}
                >
                    SNIFF IT
                </h1>

               
                <h1
                    className='text-2xl font-bold bg-clip-text text-transparent'
                    style={{
                        fontFamily: 'bebas',
                        backgroundImage: 'linear-gradient(90deg, #ffffff, #aaaaaa)'
                    }}
                >
                    Experience the essence of elegance with Sniff It.
                </h1>

               
                <div className="flex gap-4 text-xl text-gray-400 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaInstagram /></a>
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaTiktok /></a>
                </div>
            </div>

            
            <div className="border-t border-gray-800 mt-8"></div>

            
            <p className="mt-4 text-center text-gray-500 text-sm">
                © 2025 Sniff It. All rights reserved.
            </p>

        </footer>
    );
}
