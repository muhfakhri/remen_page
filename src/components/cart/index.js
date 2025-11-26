import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { WHATSAPP_NUMBER } from "../../config/whatsapp";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) {
      alert("Keranjang kosong!");
      return;
    }

    let message = "Halo, saya ingin memesan:\n\n";
    cartItems.forEach((item) => {
      const price = item.harga_akhir || item.harga;
      message += `${item.title}\n`;
      message += `Harga: Rp ${price.toLocaleString()}\n`;
      message += `Jumlah: ${item.quantity}\n`;
      message += `Subtotal: Rp ${(price * item.quantity).toLocaleString()}\n\n`;
    });

    const total = getTotalPrice();
    message += `—————————————————\n`;
    message += `TOTAL: Rp ${total.toLocaleString()}\n`;
    message += `—————————————————`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Clear cart after sending
    clearCart();
  };

  if (!isOpen) return null;

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-end lg:items-center justify-end lg:justify-center transition-opacity duration-300 ${isOpen ? 'bg-black bg-opacity-50' : 'pointer-events-none'}`}>
      <div className="bg-white w-full lg:w-96 h-screen lg:h-auto max-h-screen lg:max-h-[600px] rounded-t-lg lg:rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-logo-color text-white p-4 flex items-center justify-between rounded-t-lg lg:rounded-t-lg shrink-0">
          <h2 className="text-xl font-bold">Keranjang ({cartItems.length})</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-gray-200 transition"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Keranjang kosong</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const price = item.harga_akhir || item.harga;
                return (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-3 flex gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-logo-color font-bold text-sm">
                        Rp {price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300 transition"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700 text-xs font-semibold"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-3 bg-white shrink-0">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span className="text-logo-color">
                Rp {getTotalPrice().toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-200 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.217 1.331 2.264 3.897 3.764 6.662 3.764h.006c1.211 0 2.372-.244 3.477-.677l.129-.061 3.282.860-.877-3.21.06-.124a9.864 9.864 0 001.623-5.894c-.001-5.45-4.436-9.884-9.888-9.884" />
              </svg>
              Pesan via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
