


import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 lg:px-20 py-10 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">SunCart ☀️</h2>
          <p className="text-white/80">
            Your one-stop shop for summer essentials. Stay cool, stylish and protected all season long!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">📧 support@suncart.com</p>
          <p className="text-gray-400">📞 +8801604800362</p>

          <div className="flex gap-4 mt-4 text-xl">
           <Link href={'/'}><FaFacebook className="hover:text-blue-500 cursor-pointer" /> </Link>
           <Link href={'/'}>
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </Link>
            
           <Link href={'/'}>
           
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            </Link>
           
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved. | Privacy Policy
      </div>

    </footer>


    

  );
};

export default Footer;