import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const Contact = () => {
  const [tentangKami, setTentangKami] = useState(null);
  const [mediaSosial, setMediaSosial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tentangData, error: tentangError } = await supabase
        .from("tentang_kami")
        .select("*")
        .single();

      if (!tentangError) setTentangKami(tentangData);

      const { data: mediaData, error: mediaError } = await supabase
        .from("media_sosial")
        .select("*");

      if (!mediaError) setMediaSosial(mediaData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-logo-color text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Kunjungi lokasi Remen Coffee
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Informasi lebih detail mengenai kami, Remen Coffee
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MAPS */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26844.205928094212!2d110.35109219075059!3d-7.891529732787924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55003a848301%3A0xdbeb2e35a28a7b92!2sR%C3%A8men%20Coffee!5e1!3m2!1sid!2sid!4v1752798670563!5m2!1sid!2sid"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* INFO */}
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  {/* Alamat */}
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-50">Alamat</h3>
                    <p className="mt-1 text-white">
                      {tentangKami?.alamat || "-"}
                    </p>
                  </div>

                  {/* Jam Operasional */}
                  <div className="border-t border-coklat-muda px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-50">
                      Jam Operasional
                    </h3>
                    <p className="mt-1 text-white">
                      {tentangKami?.jam_operasional || "-"}
                    </p>
                  </div>

                  {/* Media Sosial */}
                  <div className="border-t border-coklat-muda px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-50">Contact</h3>
                    {mediaSosial.length > 0 ? (
                      mediaSosial.map((item) => (
                        <p key={item.id} className="mt-1 text-white">
                          {item.platform}:{" "}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                          >
                            {item.handle}
                          </a>
                        </p>
                      ))
                    ) : (
                      <p className="mt-1 text-gray-300">Belum ada kontak</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
