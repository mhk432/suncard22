'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className='bg-white shadow-md px-4 md:px-10 lg:px-20 py-4'>

      {/* Top Bar */}
      <div className='flex items-center justify-between'>

        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image src={logo} alt="logo" width={70} />
          <Link href="/" className='text-xl font-bold'>SunCart</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8'>
          <Link href="/" className={pathName === "/" ? "text-yellow-500 font-semibold" : ""}>Home</Link>
          <Link href="/products" className={pathName === "/products" ? "text-yellow-500 font-semibold" : ""}>Products</Link>
          <Link href="/profile" className={pathName === "/profile" ? "text-yellow-500 font-semibold" : ""}>Profile</Link>
        </div>

        {/* Desktop Auth */}
        <div className='hidden md:flex items-center gap-4'>
          {isPending ? (
            <p>Loading...</p>
          ) : user ? (
            <>
              <Image
                src={user.image || "/user.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-green-500 text-white rounded">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
        >
          {open ? (
            <X size={28} className="transition rotate-180 duration-300" />
          ) : (
            <Menu size={28} className="transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden mt-4 flex flex-col gap-4 bg-gray-100 p-4 rounded-xl shadow'>

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>Profile</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                <Image
                  src={user.image || "/user.png"}
                  alt="user"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}

    </nav>
  );
};

export default Navbar;