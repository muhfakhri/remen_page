// filepath: /c:/Users/nurfa/OneDrive/Documents/A_CODING/nextjs/tefa-mp/src/pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/Footer';
import Contact from '../components/contact';
import Product from '@/components/product';
import Cart from '@/components/cart';
import { About, ChatWidget, Kerjasama, TopButton } from '@/components';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import IklanBaner from '../components/BannerSlider'


const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const kerjasamaVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [aboutRef, aboutControls] = useScrollAnimation(aboutVariants);
  const [kerjasamaRef, kerjasamaControls] = useScrollAnimation(kerjasamaVariants);
  const [productRef, productControls] = useScrollAnimation(productVariants);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Remen Coffe" />
        <title>Remen Coffe</title>
        <link rel="icon" href="/logo_remen.svg" type="image/svg+xml"/>
      </Head>
      <main>
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <ChatWidget isCartOpen={isCartOpen} />
        <Hero /> 
        <br /> <br /> <br />
        <div className="relative z-40 h-[20px]">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 translate-y-[-90%]  px-6 py-41 rounded-xl  max-w-xl w-full text-center transform transition-all ">
        <IklanBaner />
    
  </div>
</div>

        <motion.div
          id="about"
          ref={aboutRef}
          initial="hidden"
          animate={aboutControls}
          variants={aboutVariants}
        >
          <About />
        </motion.div>
        <br /> <br /> <br />
        <motion.div
          id="kerjasama"
          ref={kerjasamaRef}
          initial="hidden"
          animate={kerjasamaControls}
          variants={kerjasamaVariants}
        >
          <Kerjasama />
        </motion.div>
        <br /> <div id='layanan' /><br /> <br /><br /> <br /> <br />
        <motion.div
          ref={productRef}
          initial="hidden"
          animate={productControls}
          variants={productVariants}
        >
          <Product />
        </motion.div>
        <br /> <div id='contact' /> <br /> <br /> <br /> <br /> <br />
        <Contact />
        <TopButton isCartOpen={isCartOpen} />
        <Footer />
      </main>
    </div>
  );
}