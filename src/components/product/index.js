import React, { useEffect, useState } from "react";

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalPrice, setModalPrice] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(1);

    const products = [
        {
            title: "Matcha Fussion",
            description: "A unique harmony of earthy matcha, bold espresso, and creamy UHT milk...",
            modalContent: "A unique harmony of earthy matcha, bold espresso, and creamy UHT milk, blending vibrant flavors into one refreshing experience.",
            image: "images/matcha.png",
            price: "Rp 25.000"
        },
        {
            title: "Aren Coffee",
            description: "A refreshing blend of espresso, UHT milk, iced water, and palm sugar...",
            modalContent: "A refreshing blend of espresso, UHT milk, iced water, and natural palm sugar sweetness...",
            image: "images/aren.png",
            price: "Rp 22.000"
        },
        {
            title: "Robusta Coffee",
            description: "A rich fusion of Temanggung robusta espresso, silky UHT milk, and smooth creamer...",
            modalContent: "A rich fusion of Temanggung robusta espresso, silky UHT milk, and smooth creamer...",
            image: "images/robusta.png",
            price: "Rp 24.000"
        },
        {
            title: "Milkpresso Ice",
            description: "Smooth espresso mixed with creamy UHT milk and sweet vanilla syrup...",
            modalContent: "Smooth espresso mixed with creamy UHT milk and sweet vanilla syrup...",
            image: "images/milkpresso.png",
            price: "Rp 26.000"
        }
    ];

    const openModal = (content, title, price) => {
        setModalContent(content);
        setModalTitle(title);
        setModalPrice(price);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent("");
        setModalTitle("");
        setModalPrice("");
    };

    const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setItemsPerSlide(3);
        } else if (width >= 640) {
            setItemsPerSlide(2);
        } else {
            setItemsPerSlide(1);
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + itemsPerSlide) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - itemsPerSlide + products.length) % products.length);
    };

    useEffect(() => {
        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    });

    const visibleProducts = [];
    for (let i = 0; i < itemsPerSlide; i++) {
        const index = (currentIndex + i) % products.length;
        visibleProducts.push(products[index]);
    }

    return (
        <div className="w-full px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-800">Menu Unggulan</h2>
            </div>

            <div className="relative flex items-center justify-center max-w-6xl mx-auto">
                {/* Prev Button */}
                <button 
  onClick={prevSlide} 
  className="absolute left-0 z-10 bg-logo-color text-white rounded-full shadow-md p-2 hover:bg-coklat-muda transition duration-300"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

                {/* Product Cards */}
                <div className="flex gap-4 overflow-hidden">
                    {visibleProducts.map((product, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow w-72 flex-shrink-0">
                            <img className="rounded-t-lg w-full h-48 object-cover" src={product.image} alt={product.title} />
                            <div className="p-4">
                                <h5 className="text-xl font-bold mb-2">{product.title}</h5>
                                <p className="text-logo-color font-semibold mb-1">{product.price}</p>
                                <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                                <button 
                                    onClick={() => openModal(product.modalContent, product.title, product.price)} 
                                    className="text-white bg-logo-color hover:bg-coklat-muda px-4 py-2 rounded text-sm"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
               <button 
  onClick={nextSlide} 
  className="absolute right-0 z-10 bg-logo-color text-white rounded-full shadow-md p-2 hover:bg-coklat-muda transition duration-300"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-2">{modalTitle}</h3>
                        <div className="text-logo-color font-semibold text-lg mb-4">
                            {modalPrice}
                        </div>
                        <p className="mb-4">{modalContent}</p>
                        <button 
                            onClick={closeModal} 
                            className="bg-logo-color text-white px-4 py-2 rounded hover:bg-coklat-muda"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
