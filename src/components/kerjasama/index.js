"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "./../../supabaseClient";

const Testimoni = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("testimoni")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (err) {
      console.error("Gagal mengambil testimoni:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(nextSlide, 10000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-300">
        Memuat testimoni...
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="py-20 text-center text-gray-300">
        Belum ada testimoni.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-coklat-muda via-logo-color to-coklat-muda py-20 text-white relative">
      <h2 className="text-3xl font-bold text-center mb-12">
        Testimoni Pelanggan
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        <div className="relative flex items-center justify-center w-full h-[280px] md:h-[320px] overflow-hidden rounded-xl">
          {testimonials.map((item, i) => {
            const diff = (i - index + testimonials.length) % testimonials.length;

            let opacity = "opacity-50";
            let scale = "scale-75";
            let zIndex = 0;
            let translate = "translate-x-0";

            if (diff === 0) {
              scale = "scale-100";
              opacity = "opacity-100";
              zIndex = 30;
            } else if (diff === 1) {
              translate = "translate-x-44 md:translate-x-60";
              zIndex = 20;
            } else if (diff === testimonials.length - 1) {
              translate = "-translate-x-44 md:-translate-x-60";
              zIndex = 20;
            } else {
              opacity = "opacity-0 pointer-events-none";
              zIndex = 0;
            }

            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-700 ease-in-out transform ${translate} ${scale} ${opacity}`}
                style={{ zIndex }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-[250px] md:w-[320px] text-center">
                  <h3 className="text-lg font-semibold">{item.nama}</h3>
                  <p className="mt-3 text-gray-200 text-sm leading-relaxed line-clamp-4">
                    “{item.isi}”
                  </p>
                  <div className="mt-3 text-yellow-400 text-lg">
                    {"★".repeat(item.rating || 0)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition z-50"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition z-50"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-yellow-400 scale-110" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
