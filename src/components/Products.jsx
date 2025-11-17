import { useEffect } from "react";
import Header from "./Header";
export default function Products() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const perfumes = [
        {
            id: 1,
            name: "Sniff It — Shadow Mist",
            description: "A bold, modern fragrance crafted exclusively for those who move in silence. Clean, smoky, and confidently minimal.",
            image: "/Gemini_Generated_Image_ek5zjhek5zjhek5z.png",
            price: 950,
            oldPrice: 1200,
            size: "100 ml"
        },
        {
            id: 2,
            name: "Dior Sauvage",
            description: "Fresh, spicy and powerful — one of the world’s best-selling perfumes.",
            image: "/pexels-absin-547911446-17945896.jpg",
            price: 1100,
            oldPrice: 1500,
            size: "100 ml"
        },
        {
            id: 3,
            name: "Versace Eros",
            description: "Sweet, bold, attractive — one of the most iconic clubbing scents.",
            image: "/pexels-arjunn-la-1561931-28460123.jpg",
            price: 1050,
            oldPrice: 1400,
            size: "100 ml"
        },
        {
            id: 4,
            name: "Tom Ford Black Orchid",
            description: "Dark, luxurious and mysterious — a unisex masterpiece.",
            image: "/pexels-alexvrv-34143831.jpg",
            price: 1300,
            oldPrice: 1800,
            size: "100 ml"
        }
    ];
    return (
        <>
            <Header about={true} contact={true} home={true} />
            <div className="bg-black min-h-screen text-white py-16 px-8 md:px-16">
                <h1
                    className="text-4xl mb-10 font-bold tracking-widest text-center md:text-left"
                    style={{ fontFamily: "bebas" }}
                >
                    OUR PRODUCTS
                </h1>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {perfumes.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-all cursor-pointer flex flex-col justify-between"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover rounded-xl hover:scale-110 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-4">
                                <h2
                                    className="text-2xl font-bold tracking-wide"
                                    style={{ fontFamily: "bebas" }}
                                >
                                    {item.name}
                                </h2>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    {item.description}
                                </p>
                                <p className="text-gray-300 text-sm mt-3">
                                    <span className="font-semibold">Size:</span> {item.size}
                                </p>
                                <div className="mt-3 mb-2 flex items-end gap-4">
                                    <p className="text-lg font-semibold text-white">
                                        {item.price} EGP
                                    </p>
                                    <p className="text-sm text-gray-500 line-through">
                                        {item.oldPrice} EGP
                                    </p>
                                </div>
                            </div>
                            <button
                                className="mt-4 bg-white hover:bg-black hover:text-white text-black font-semibold py-2 rounded-lg transition-all cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
