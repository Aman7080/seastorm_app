import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaInstagram, FaTwitter, FaDiscord, FaShip } from "react-icons/fa";
function NavBar() {
  return (
    <div>
      <Head>
        <title>SEASTORM</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js"> </Script>
      </Head>
      <div className="bg-teal-400">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-2 flex-col md:flex-row">
          {" "}
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full animate-spin-slow hover:animate-spin"
          ></Image>
          <ul className=" md:inline-flex items-center space-x-5  text-teal-600 mt-6">
            <Link href="/#Mintbox">
              <a className="border-double border-4 px-4 py-1 border-teal-500 bg-teal-50  hover:translate-y-1 hover:scale-110">
                Mint Now
              </a>
            </Link>
            <Link href="/#Timeline">
              <a className="border-double border-4 px-4 py-1 border-teal-500 bg-teal-50 hover:translate-y-1 hover:scale-110">
                Timeline
              </a>
            </Link>
            <Link href="/gallery">
              <a className="border-double border-4 px-4 py-1 border-teal-500 bg-teal-50 hover:translate-y-1 hover:scale-110">
                Gallery
              </a>
            </Link>
          </ul>
          <div className="flex items-center space-x-5 mt-8 md:mt-0">
            <a
              href="https://twitter.com/seastormclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:animate-bounce text-xl" />
            </a>

            <a
              href="https://instagram.com/seastormclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:animate-bounce text-xl" />
            </a>

            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="hover:animate-bounce text-xl" />
            </a>

            <a
              href="https://opensea.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaShip className="hover:animate-bounce text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
