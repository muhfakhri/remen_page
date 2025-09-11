import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "bg-hero-pattern-1",
  "bg-hero-pattern-2"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 ${images[currentImage]} bg-cover bg-center bg-no-repeat`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-muda opacity-100"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-between lg:px-8">
        {/* Kiri: Teks */}
        <div className="max-w-2xl text-center sm:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-extrabold text-coklat-muda sm:text-5xl"
          >
            Selamat Datang
            <strong className="block font-coffe text-logo-color text-[90px] leading-none">
              Remen Coffee
            </strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 max-w-lg text-coklat-muda sm:text-xl/relaxed"
          >
            Rasakan nikmatnya kopi berkualitas dengan harga yang bersahabat di Remen Coffee.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href="#layanan"
              className="block w-full rounded bg-logo-color px-12 py-3 text-sm font-medium text-white shadow hover:bg-coklat-muda focus:outline-none focus:ring active:bg-coklat-muda sm:w-auto"
            >
              MENU UNGGULAN
            </a>
          </div>
        </div>

        {/* Kanan: Gambar kopi */}
        <div className="hidden lg:block lg:w-1/2 z-10">
          <img
            src="/images/produk.png"
            alt="Remen Coffe"
            className="w-full max-w-md mx-auto animate-fade-in-up drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
