import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from '../components/Nav';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="page-layout">
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
