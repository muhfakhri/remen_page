import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const ChatWidget = () => {
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    const fetchWhatsapp = async () => {
      const { data, error } = await supabase
        .from("tentang_kami")
        .select("whatsapp")
        .limit(1)
        .single();

      if (error) {
        console.error("❌ Gagal ambil nomor WhatsApp:", error.message);
        alert("Tidak dapat mengambil nomor WhatsApp dari database.");
        return;
      }

      const nomor = data?.whatsapp?.replace(/[^0-9]/g, "");
      if (!nomor) {
        alert("Nomor WhatsApp belum tersedia di database.");
        return;
      }

      setWhatsapp(nomor);
    };

    fetchWhatsapp();
  }, []);

  useEffect(() => {
    if (!whatsapp) return;

    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "",
        cornerRadius: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "left",
        whatsAppNumber: whatsapp, // pakai state
        welcomeMessage: "",
        zIndex: 999999,
        btnColorScheme: "light",
      };
      _waEmbed(wa_btnSetting);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [whatsapp]);

  return null;
};

export default ChatWidget;
