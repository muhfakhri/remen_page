import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useCart } from "../../context/CartContext";

const Product = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalHarga, setModalHarga] = useState(null);
  const [modalHargaAkhir, setModalHargaAkhir] = useState(null);
  const [modalDiskon, setModalDiskon] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const [addedNotification, setAddedNotification] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedNotification(product.title);
    setTimeout(() => setAddedNotification(null), 2000);
  };

  const openModal = (product) => {
    setModalContent(product.description);
    setModalTitle(product.title);
    setModalHarga(product.harga);
    setModalHargaAkhir(product.harga_akhir);
    setModalDiskon(!!product.id_diskon);
    setModalImage(product.image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const scrollToMenuUnggulan = () => {
    const element = document.getElementById("menu-unggulan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= 1024) setItemsPerSlide(3);
    else if (width >= 640) setItemsPerSlide(2);
    else setItemsPerSlide(1);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % bestSeller.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + bestSeller.length) % bestSeller.length);



  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("produk").select("*").eq("status", "aktif");
      if (error) console.error("Supabase fetch error:", error);
      else {
        const formatted = data.map((p) => ({
          id: p.id,
          title: p.nama_produk,
          description: p.deskripsi,
          image: p.gambar,
          harga: p.harga,
          harga_akhir: p.harga_akhir,
          is_best_seller: p.is_best_seller,
          id_diskon: p.id_diskon,
        }));
        setBestSeller(formatted.filter((p) => p.is_best_seller));
        setOtherProducts(formatted.filter((p) => !p.is_best_seller));
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (bestSeller.length > 0) nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [bestSeller]);

  const visibleProducts = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    const index = (currentIndex + i) % bestSeller.length;
    if (bestSeller[index]) visibleProducts.push(bestSeller[index]);
  }

  return (
    <div className="w-full px-4 text-center" id="menu-unggulan">
      {/* Notification Toast */}
      {addedNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          ✓ {addedNotification} ditambahkan ke keranjang
        </div>
      )}
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 cursor-pointer hover:text-logo-color transition-colors" onClick={scrollToMenuUnggulan}>Menu Unggulan</h2>
      </div>

      {/* SLIDER */}
      <div className="relative flex items-center justify-center max-w-6xl mx-auto overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-logo-color text-white rounded-full shadow-md p-2 hover:bg-coklat-muda transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-8 transition-all duration-500 select-none">
          {visibleProducts.map((product, index) => {
            const centerIndex = Math.floor(itemsPerSlide / 2);
            const isCenter = index === centerIndex;

            return (
              <div
                key={index}
                className={`
                  flex flex-col w-72 text-left
                  ${isCenter ? "opacity-100 scale-100" : "opacity-70 scale-95"}
                  transition-all duration-500 ease-in-out
                `}
              >
                <div className="overflow-hidden rounded-xl bg-gray-50 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-contain"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h5>
                  <div className="mb-2">
                    {product.id_diskon ? (
                      <>
                        <span className="text-gray-400 text-sm line-through mr-2">
                          Rp {product.harga.toLocaleString()}
                        </span>
                        <span className="text-logo-color font-bold text-lg">
                          Rp {product.harga_akhir.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-logo-color font-semibold text-lg">
                        Rp {product.harga.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 text-white bg-logo-color hover:bg-coklat-muda px-4 py-2 rounded-md text-sm transition"
                  >
                    + Keranjang
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-logo-color text-white rounded-full shadow-md p-2 hover:bg-coklat-muda transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {showAll && (
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="font-semibold text-xl text-gray-800 mb-6">Produk Lainnya</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {otherProducts.map((product, index) => (
              <div key={index} className="flex flex-col text-left">
                <div className="overflow-hidden rounded-xl bg-gray-50 flex justify-center items-center">
                  <img
                    className="w-full h-32 object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="mt-2">
                  <h5 className="text-sm font-bold mb-1 text-gray-800 truncate">{product.title}</h5>
                  <div className="mb-2">
                    {product.id_diskon ? (
                      <>
                        <span className="text-gray-400 text-sm line-through mr-2">
                          Rp {product.harga.toLocaleString()}
                        </span>
                        <span className="text-logo-color font-bold text-lg">
                          Rp {product.harga_akhir.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-logo-color font-semibold text-lg">
                        Rp {product.harga.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="text-white bg-logo-color hover:bg-coklat-muda px-2 py-1 rounded text-xs transition"
                  >
                    + Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-logo-color text-white rounded-lg shadow hover:bg-coklat-muda transition"
        >
          {showAll ? "Less Product" : "More Product"}
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-5 relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-logo-color transition"
            >
              ✕
            </button>

            <div className="flex justify-center items-center rounded-xl mb-4">
              <img
                src={modalImage || "/default-image.jpg"}
                alt={modalTitle}
                className="max-h-60 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-1">{modalTitle}</h3>
            <div className="mb-2">
              {modalDiskon ? (
                <>
                  <span className="text-gray-400 text-sm line-through mr-2">
                    Rp {modalHarga.toLocaleString()}
                  </span>
                  <span className="text-logo-color font-extrabold text-xl">
                    Rp {modalHargaAkhir.toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="text-logo-color font-semibold text-xl">
                  Rp {modalHarga?.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{modalContent}</p>

            <div className="space-y-3 mb-5">
              <div className="flex flex-col text-left">
                <label className="text-sm text-gray-700 mb-1 font-medium">Nama Anda</label>
                <input
                  type="text"
                  id="buyerName"
                  placeholder="Masukkan nama Anda"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-logo-color outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label className="text-sm text-gray-700 mb-1 font-medium">Jumlah Pesanan</label>
                <input
                  type="number"
                  id="orderQty"
                  placeholder="Masukkan jumlah"
                  min="1"
                  defaultValue="1"
                  onInput={(e) => {
                    const qty = parseInt(e.target.value || "1");
                    const basePrice = modalDiskon ? modalHargaAkhir : modalHarga;
                    const total = basePrice * qty;
                    document.getElementById("totalHarga").textContent =
                      "Rp " + total.toLocaleString();
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-logo-color outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label className="text-sm text-gray-700 mb-1 font-medium">Noted</label>
                <input
                  type="text"
                  id="note"
                  placeholder="Noted"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-logo-color outline-none"
                />
              </div>
              

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                <span className="text-gray-700 text-sm">Total yang harus dibayar:</span>
                <p id="totalHarga" className="text-logo-color font-bold text-lg mt-1">
                  Rp {((modalDiskon ? modalHargaAkhir : modalHarga) * 1).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="w-1/2 border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100 transition"
              >
                Batal
              </button>

              <button
                onClick={async () => {
                  const name = document.getElementById("buyerName").value.trim();
                  const note = document.getElementById("note").value.trim();
                  const qty = parseInt(document.getElementById("orderQty").value || "1");

                  if (!name || qty <= 0) {
                    alert("Harap isi nama dan jumlah pesanan!");
                    return;
                  }

                  const basePrice = modalDiskon ? modalHargaAkhir : modalHarga;
                  const total = basePrice * qty;

                  try {
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

                    const whatsapp = data?.whatsapp?.replace(/[^0-9]/g, "");
                    if (!whatsapp) {
                      alert("Nomor WhatsApp belum tersedia di database.");
                      return;
                    }

                    const pesan = `Halo, saya *${name}* ingin memesan *${modalTitle}* sebanyak *${qty}* pcs.%0A%0A💰 Total yang harus dibayar: *Rp ${total.toLocaleString()}*  noted *${note}*`;
                    const waUrl = `https://wa.me/${whatsapp}?text=${pesan}`;

                    window.open(waUrl, "_blank");

                  } catch (err) {
                    console.error("⚠️ Terjadi kesalahan:", err);
                    alert("Terjadi kesalahan saat mengirim pesan.");
                  }
                }}
                className="w-1/2 bg-logo-color text-white rounded-lg py-2 font-medium hover:bg-coklat-muda transition"
              >
                Kirim ke WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
