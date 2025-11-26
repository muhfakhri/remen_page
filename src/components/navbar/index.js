import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const navbar = ({ onCartClick }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { getTotalItems } = useCart();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSmoothScroll = (e) => {
		const href = e.currentTarget.getAttribute("href");
		if (href.startsWith("#")) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
				setIsMenuOpen(false);
			}
		}
	};

	return (
		<div>
			<nav className="bg-white border-gray-200 py-2.5 shadow-lg fixed top-0 inset-x-0 z-50">
				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
					<a href="#" className="flex items-center">
						<img src="/remen_logo.svg" className="h-14 mr-1 sm:h-14" alt="Logo" />
						<div className="flex flex-col items-left -space-y-9">
						
						</div>
					</a>
					<div className="flex items-center lg:order-2"></div>
					<div className="flex items-center lg:order-2">
						<div className="hidden mt-2 mr-4 sm:inline-block">
							<span></span>
						</div>

						<button
							onClick={onCartClick}
							className="relative inline-flex items-center justify-center p-2 mr-3 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							{getTotalItems() > 0 && (
								<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
									{getTotalItems()}
								</span>
							)}
						</button>

						<a href="/images/menu.png" download="menu.png"
							className="text-white bg-logo-color hover:bg-coklat-muda focus:ring-4 focus:ring-coklat-muda font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">Unduh Menu</a>
						<button onClick={toggleMenu} type="button"
							className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-controls="mobile-menu-2" aria-expanded={isMenuOpen}
							>
							<span className="sr-only">Open main menu</span>
							<svg className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"></path>
							</svg>
							<svg className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"></path>
							</svg>
						</button>
					</div>
					<div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? "" : "hidden"}`} id="mobile-menu-2">
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 lg:ml-40 lg:border-0">

							<li>
								<a href="#"
									onClick={handleSmoothScroll}
									className="block py-2 pl-3 pr-4 text-white bg-logo-color rounded lg:bg-transparent lg:text-logo-color lg:p-0 "
									aria-current="page">Beranda</a>
							</li>
							<li>
								<a href="#about"
									onClick={handleSmoothScroll}
									className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0 ">Tentang</a>
							</li>
							<li>
								<a href="#menu-unggulan"
									onClick={handleSmoothScroll}
									className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0">Produk</a>
							</li>
							<li>
								<a href="#contact"
									onClick={handleSmoothScroll}
									className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0 ">Kontak</a>
							</li>
						   
						</ul>
					</div>
				</div>
			</nav>

			<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

		</div>
	);
}

export default navbar;