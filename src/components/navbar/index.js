import React from "react";

const navbar = () => {
return (
    <div >
        <nav className="bg-white border-gray-200 py-2.5 shadow-lg fixed top-0 inset-x-0 z-50">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
    <img src="/remen_logo.svg" className="h-14 mr-1 sm:h-14" alt="Logo" />
    <div className="flex flex-col items-left -space-y-9">
        
    </div>
</a>
                <div className="flex items-center lg:order-2"></div>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <a href="/images/menu.png" download="menu.png"
                class="text-white bg-logo-color hover:bg-coklat-muda focus:ring-4 focus:ring-coklat-muda font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">Unduh Menu</a>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 lg:ml-40 lg:border-0">

                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-white bg-logo-color rounded lg:bg-transparent lg:text-logo-color lg:p-0 "
                        aria-current="page">Beranda</a>
                </li>
                <li>
                    <a href="#about"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0 ">Tentang</a>
                </li>
                <li>
                    <a href="#layanan"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0">Produk</a>
                </li>
                <li>
                    <a href="#contact"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-logo-color lg:p-0 ">Kontak</a>
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