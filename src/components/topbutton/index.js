import React from "react";

const TopButton = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-12 h-12 text-white bg-logo-color rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-coklat-muda focus:ring-offset-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top" >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
            </button>
        )
    );
};

export default TopButton;