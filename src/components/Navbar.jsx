 'use client'

import Image from 'next/image';

import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathName =usePathname()
  return (
    <nav className='flex items-center justify-between p-4
     bg-white shadow-md px-20'>
      <div className='flex gap-2 items-center'>
         <Image src={logo} alt="Logo" width={90} height={40} />
         <h2> SunCart</h2>
      </div>

      <div className='flex items-center gap-10'>
       <Link className={pathName === '/' ? "text-yellow-500" : "text-gray-500"} href="/">Home</Link>
       <Link className={pathName === '/products' ? "text-yellow-500" : "text-gray-500"} href="/products">Products</Link>
       <Link className={pathName === '/profile' ? "text-yellow-500" : "text-gray-500"} href="/profile">My Profile</Link>
      </div>

      <div className='flex items-center gap-4'>
        <Link href="/login" className='px-6 py-2 rounded-sm 
         bg-blue-500 text-white cursor-pointer ' >Login</Link>
        <Link className='px-6 py-2 rounded-sm bg-blue-500
         text-white cursor-pointer ' href="/register">Register</Link>
       
      </div>
    </nav>
  );
};

export default Navbar;