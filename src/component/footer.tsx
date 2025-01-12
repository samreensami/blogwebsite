import Link from "next/link";

// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold"><i>Plantify</i></h3>
            <p>Your one-stop solution for all things green!</p>
          </div>
          <div className="flex justify-center space-x-8 mb-4">
            <Link href="/about" className="text-white hover:text-gray-300">About Us</Link>
            <Link href="/services" className="text-white hover:text-gray-300">Blog</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </div>
         
          <div>
            <p>&copy; 2025 Plant Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  