import { Link } from "react-router";
import Header from "./Header";

export default function Hero() {
    return (
        <>
            <Header contact={true} about={true} products={true} />

            <div className="flex flex-col md:flex-row justify-center items-center px-12 py-20 gap-16">

                <div className="max-w-xl">
                    <h1
                        className="text-6xl font-bold tracking-wide leading-tight text-white"
                        style={{ fontFamily: 'bebas' }}
                    >
                        Discover Your
                        <span className="block text-gray-400">Signature Scent</span>
                    </h1>

                    <p className="mt-4 text-md tracking-wide text-gray-500 uppercase">
                        By Sniff It
                    </p>

                    <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                        Elevate your presence with minimalist, refined fragrances crafted for a timeless identity.
                        Sniff It brings you a scent experience built on clarity, purity, and modern luxury.
                    </p>

                    <Link to={'/product'}> <button
                        className="mt-8 bg-white text-black px-8 py-3 rounded-sm text-lg font-semibold hover:bg-gray-200 transition-all duration-200"
                    >
                        Shop Now
                    </button>
                    </Link>
                </div>


                <div className="hidden md:block">
                    <img
                        className="rounded-3xl shadow-xl shadow-gray-800/40"
                        src="/9634.jpg"
                        width="380px"
                    />
                </div>

            </div>
        </>
    );
}
