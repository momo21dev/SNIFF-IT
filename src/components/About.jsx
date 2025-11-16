import Header from "./Header";

export default function About() {
    return (
        <>
            <Header home={true} contact={true} products={true} />
            <div className="min-h-screen bg-black text-white px-6 md:px-12 py-20 flex flex-col gap-20">

                
                <section className="text-center md:text-left max-w-3xl mx-auto">
                    <h2 className="text-5xl font-bold tracking-wide" style={{ fontFamily: 'bebas' }}>
                        About Sniff It
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                        Sniff It is a premium fragrance brand dedicated to crafting minimalist scents that reflect your personality and style.
                    </p>
                    <p className="mt-2 text-gray-500 italic">
                        "Your signature scent, your story."
                    </p>
                </section>

               
                <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="/2151890527.jpg"
                            alt="Our Story"
                            className="rounded-3xl shadow-xl shadow-gray-800/40 w-full"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Our Journey</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Founded in 2025 in Egypt, Sniff It was born from a passion for unique, modern fragrances inspired by timeless elegance.
                            Our mission is to bring luxury, clarity, and purity into every scent experience.
                        </p>
                    </div>
                </section>

                
                <section className="max-w-4xl mx-auto text-center md:text-left">
                    <h3 className="text-3xl font-semibold text-gray-200 mb-8">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <h4 className="text-xl font-semibold">Quality</h4>
                            <p>Only the finest ingredients for a premium scent experience.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <h4 className="text-xl font-semibold">Minimalism</h4>
                            <p>Fragrances that speak for themselves, simple and elegant.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <h4 className="text-xl font-semibold">Luxury</h4>
                            <p>Affordable luxury designed to leave a lasting impression.</p>
                        </div>
                    </div>
                </section>

                
                <section className="max-w-4xl mx-auto text-center md:text-left">
                    <h3 className="text-3xl font-semibold text-gray-200 mb-4">Our Expertise</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        At Sniff It, we specialize in creating fragrances that are both modern and timeless. Our team of experts ensures every scent is crafted with precision, care, and a deep understanding of perfume artistry.
                    </p>
                </section>

              
                <section className="text-center">
                    <button className="mt-4 bg-white text-black px-6 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-all duration-200">
                        Discover Our Collection
                    </button>
                </section>

            </div>
        </>
    );
}
