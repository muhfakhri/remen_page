import React from "react";

const Contact = () => {
    return (
        <div>
          <section class="bg-logo-color text-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-white">Kunjungi lokasi Remen Coffe</h2>
            <p class="mt-4 text-lg text-gray-200">informasi lebih detail mengenai kami, Remen Coffee</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26844.205928094212!2d110.35109219075059!3d-7.891529732787924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55003a848301%3A0xdbeb2e35a28a7b92!2sR%C3%A8men%20Coffee!5e1!3m2!1sid!2sid!4v1752798670563!5m2!1sid!2sid"
                        width="100%" height="480" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Alamat</h3>
                            <p class="mt-1 text-white">Jl. Parangtritis No.KM.11, Dukuh, Sabdodadi, Kec. Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55715</p>
                        </div>
                        <div class="border-t border-coklat-muda px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Jam Oprasional</h3>
                            <p class="mt-1 text-white">	08.00–15.00</p>
                 
                        </div>
                        <div class="border-t border-coklat-muda px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Contact</h3>
                            <p class="mt-1 text-white">Instagram: @remen_coffe</p>
                            <p class="mt-1 text-white">Phone: +62</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
    };


export default Contact;
