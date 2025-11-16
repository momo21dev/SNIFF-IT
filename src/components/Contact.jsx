import Header from "./Header";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <Header products={true} about={true} home={true} />
            <section className="bg-black text-white px-6 md:px-12 py-20">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2 w-full flex justify-center md:justify-start px-4 md:px-0">
                        <img
                            src="/2151890487.jpg"
                            alt="Decor"
                            className="rounded-3xl shadow-xl shadow-gray-800/40 w-full max-w-xs md:max-w-md"
                        />
                    </div>

                    
                    <div className="md:w-1/2 w-full text-center md:text-left px-4 md:px-0">
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'bebas' }}>
                            Get in Touch
                        </h2>

                        <p className="text-gray-300 text-lg mb-6">
                            Reach out to us through our social channels:
                        </p>

                        <div className="flex items-center md:flex-row gap-6 text-3xl md:text-4xl text-gray-400 justify-center md:justify-start">
                            <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://tiktok.com" target="_blank" className="hover:text-white transition-colors">
                                <FaTiktok />
                            </a>
                            <a href="mailto:sniffit@example.com" className="hover:text-white transition-colors">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
