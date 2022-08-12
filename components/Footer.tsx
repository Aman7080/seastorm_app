import { FaInstagram, FaTwitter, FaDiscord, FaShip } from "react-icons/fa";
function Footer() {
  const date = new Date();
  return (
    <footer className="body-font bg-teal-400">
      <div className=" flex justify-between items-center max-w-6xl mx-auto py-2">
        <div>
          <p className="font-bold"> ©2022 SEASTORM</p>{" "}
        </div>
        <div className="flex items-center space-x-5 ">
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
    </footer>
  );
}

export default Footer;

// href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
