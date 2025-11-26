import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const ChatWidget = ({ isCartOpen = false }) => {
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
        whatsAppNumber: whatsapp,
        welcomeMessage: "",
        zIndex: isCartOpen ? -1000 : 999999,
        btnColorScheme: "light",
      };
      _waEmbed(wa_btnSetting);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [whatsapp, isCartOpen]);

  // Hide WhatsApp widget when cart is open with aggressive CSS
  useEffect(() => {
    let styleSheet = document.getElementById('wa-aggressive-hide');
    
    if (isCartOpen) {
      if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'wa-aggressive-hide';
        document.head.appendChild(styleSheet);
      }
      
      // Extremely aggressive CSS to hide all WA elements
      styleSheet.innerHTML = `
        /* Hide all WhatsApp widget elements */
        .wa_button,
        .wa-button,
        [class*="whatsapp"],
        [class*="delightchat"],
        [id*="whatsapp"],
        [id*="delightchat"],
        [data-wa-widget],
        button[aria-label*="WhatsApp"],
        div[data-test*="whatsapp"],
        iframe[src*="delightchat"],
        [style*="whatsapp"],
        [style*="delightchat"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          pointer-events: none !important;
          z-index: -99999 !important;
        }
        
        /* Hide SVG icons that might be part of the widget */
        svg[class*="whatsapp"],
        svg[class*="delightchat"],
        [class*="whatsapp"] svg,
        [class*="delightchat"] svg {
          display: none !important;
          visibility: hidden !important;
        }
        
        /* Hide any fixed position buttons on the left/right */
        body > button,
        body > div[style*="position: fixed"] {
          display: none !important;
        }
      `;
    } else {
      if (styleSheet) {
        styleSheet.innerHTML = '';
      }
    }

    return () => {
      if (styleSheet && !isCartOpen) {
        styleSheet.innerHTML = '';
      }
    };
  }, [isCartOpen]);

  return null;
};

export default ChatWidget;
