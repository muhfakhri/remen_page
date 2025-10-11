"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function BannerSlider() {
  const [banners, setBanners] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBanners = async () => {
    try {
      const { data, error } = await supabase
        .from("iklan_bener")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;
      setBanners(data || []);
    } catch (err) {
      console.error("Gagal mengambil banner:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % banners.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [banners]);

  if (loading)
    return <div className="text-center text-gray-500 py-10">Memuat banner...</div>;

  return (
        <img
          src={banners[index]?.url_iklan || "/images/Voucher.png"}
          alt={`Banner ${index + 1}`}
          className="w-full h-auto object-contain"
        />
  );
}
