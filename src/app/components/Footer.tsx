import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={120}
            
          />
          <span className="ml-0 text-2xl font-bold"></span>
        </div>

       

        <p className="text-sm text-gray-500 font-semibold">
          Copyright &copy; 2024 &middot; Primus Suite Systems LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
