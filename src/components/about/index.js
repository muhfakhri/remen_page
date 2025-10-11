import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../supabaseClient";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase
        .from("tentang_kami")
        .select("*")
        .single();

      if (error) {
        console.error("Error fetching about data:", error);
      } else {
        setAboutData(data);
      }
    };

    fetchAbout();
  }, []);

  if (!aboutData) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sm:flex items-center max-w-screen-xl mx-auto px-4"
    >
      {/* Bagian Gambar */}
      <div className="sm:w-1/2 p-6">
        <div className="image object-center text-center">
          <img
            src={aboutData.gambar || "logo_remen.png"}
            alt="about"
            className="rounded-lg mx-auto"
          />
        </div>
      </div>

      {/* Bagian Teks */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-coklat-muda uppercase">
            {aboutData.subjudul || "Tentang Kami"}
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            {aboutData.judul?.split(" ")[0]}{" "}
            <span className="text-logo-color">
              {aboutData.judul?.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          {/* Paragraf 1 */}
          {aboutData.paragraf1 && (
            <p className="text-gray-700 mb-4">{aboutData.paragraf1}</p>
          )}

          {/* Paragraf 2 */}
          {aboutData.paragraf2 && (
            <p className="text-gray-700">{aboutData.paragraf2}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
