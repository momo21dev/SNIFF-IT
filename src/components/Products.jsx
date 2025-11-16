import Header from "./Header";

export default function Products() {
    const perfumes = [
        {
            id: 1,
            name: "Dior Sauvage",
            description: "Fresh, spicy and powerful — one of the world’s best-selling perfumes.",
            image: "/pexels-absin-547911446-17945896.jpg"
        },
        {
            id: 2,
            name: "Bleu de Chanel",
            description: "A classy woody-aromatic scent perfect for everyday elegance.",
            image: "/pexels-isidor-bobinec-94539949-9202894.jpg"
        },
        {
            id: 3,
            name: "Versace Eros",
            description: "Sweet, bold, attractive — one of the most iconic clubbing scents.",
            image: "/pexels-arjunn-la-1561931-28460123.jpg"
        },
        {
            id: 4,
            name: "Tom Ford Black Orchid",
            description: "Dark, luxurious and mysterious — a unisex masterpiece.",
            image: "/pexels-alexvrv-34143831.jpg"
        }
    ];

    return (
        <>
            <Header about={true} contact={true} home={true} />
            <div className="bg-black min-h-screen text-white py-16 px-8 md:px-16">

                <h1
                    className="text-4xl mb-10 font-bold tracking-widest"
                    style={{ fontFamily: "bebas" }}
                >
                    OUR PRODUCTS
                </h1>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {perfumes.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                            <h2
                                className="text-2xl mt-4 font-bold tracking-wide"
                                style={{ fontFamily: "bebas" }}
                            >
                                {item.name}
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
