
import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import MaintenancePage from '../components/MaintenancePage';
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    // Render the maintenance page instead of the regular component
    return <MaintenancePage />;
  }

  // Otherwise, render the normal component
  return (
    <CartProvider>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </CartProvider>
  );
}