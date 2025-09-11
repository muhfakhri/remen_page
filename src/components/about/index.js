import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    useEffect(() => {
        // Any additional side effects can be added here
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:flex items-center max-w-screen-xl"
        >
            <div className="sm:w-1/2 p-20">
                <div className="image object-center text-center">
                    <img src="logo_remen.png" alt="about" className="rounded-lg" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-coklat-muda uppercase">Tentang Kami</span>
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        Tentang <span className="text-logo-color">Remen Coffee</span>
                    </h2>
                    <p className="text-gray-700">
                        Remen Coffee hadir dari semangat untuk menghadirkan kopi berkualitas tinggi dengan rasa yang autentik dan suasana yang nyaman. Kami percaya bahwa secangkir kopi bukan hanya soal minuman, tapi juga tentang pertemuan, cerita, dan momen yang berkesan.

Dengan biji kopi pilihan dari petani lokal dan proses yang penuh dedikasi, setiap sajian kami diracik dengan teliti untuk menghasilkan rasa yang konsisten dan nikmat. Dari espresso klasik hingga manual brew yang kaya karakter, kami ingin setiap kunjungan Anda menjadi pengalaman yang hangat dan menyenangkan.
                        <br /> <br />Kami juga terus berinovasi menghadirkan menu baru dan memperhatikan setiap detail, mulai dari pelayanan hingga interior yang Instagramable. Remen Coffee bukan hanya tempat untuk ngopi, tapi ruang untuk inspirasi, produktivitas, dan kehangatan.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;