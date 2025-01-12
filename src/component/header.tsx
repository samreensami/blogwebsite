'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <button className="text-white hover:text-green-500"><i>Plantify</i></button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center space-x-8">
          <Link href="/Blog" className="hover:text-green-500">
            <i>Blog</i>
          </Link>
          <Link href="/About" className="hover:text-green-500">
            <i>About</i>
          </Link>
          <Link href="/ContactUs" className="hover:text-green-500">
            <i>Contact Us</i>
          </Link>
        </div>
        <div>
          <Link href="/Like">
            <button className="text-black bg-green-400 px-3 py-2 rounded hover:bg-green-200">Like</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
