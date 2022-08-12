import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-teal-400">
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <NavBar />
        <hr />
        <Component {...pageProps} />
        <hr />
        <div className="mt-10">
          <Footer />
        </div>
      </ThirdwebProvider>
    </div>
  );
}

export default MyApp;
