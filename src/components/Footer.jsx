// import Image from 'next/image';

// import React from 'react';
// import insta from '@/assets/Instagram (1).png'
// import x from '@/assets/Vector (6).png'

// const Footer = () => {
//     return (
//        <footer className="mx-auto text-center bg-blue-400
//          text-gray-200  mt-20">
//           <div>

//   <aside className='py-10 px-20 space-y-5  '>
//     <h1 className='text-6xl  font-bold'>KeenKeeper</h1>
//     <p>Your personal shelf of meaningful connections. Browse, tend, and nurture
//        the relationships that matter most.</p>
//               <h4 className='text-2xl font-semibold'>Social Links</h4>
//                <div className='flex gap-4 mt-2 text-center  mx-auto justify-center'>
//               <a href=""><Image src={insta} alt="" className='bg-white p-2 rounded-full w-max' /></a>
//               <a href=""><Image className='bg-white p-3 rounded-full w-max' src={x} alt="" /></a>
//               <a href=""> <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="35"
//                 height="35"
//                 viewBox="0 0 24 24"
//                 className=" bg-white p-2 rounded-full w-max">
//                 <path
//                   d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg></a>
//             </div>

//   </aside>

//             <div className="pb-5 divider divider-start px-20
//          before:bg-gray-500 after:bg-gray-500 text-white">
  
//         </div >
//           <div className='pb-20 flex px-20 justify-between items-center gap-4 text-gray-200 '>
//             <div>
//                <p className='text-center text-sm text-gray-200'>Copyright © 2026 - All right reserved by DigiTools Ltd</p>

//             </div>
//             <div className='flex gap-2'>
//               <p>Privacy Policy </p>
//               <p>Policy </p>
//               <p>Cookies</p>
//             </div>
//           </div>
//           </div>
  

       
// </footer>
//     );
// };

// export default Footer;


import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-10 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">SunCart ☀️</h2>
          <p className="text-gray-400">
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
          <p className="text-gray-400">📞 +880 1234-567890</p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
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