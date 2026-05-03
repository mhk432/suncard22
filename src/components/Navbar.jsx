

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className='flex items-center justify-between px-20 py-4 bg-white shadow-md'>

      {/* Logo */}
      <div className='flex items-center gap-2'>
        <Image src={logo} alt="logo" width={80} />
        <Link href="/" className='text-xl font-bold'>SunCart</Link>
      </div>

      {/* Menu */}
      <div className='flex gap-8'>
        <Link href="/" className={pathName === "/" ? "text-yellow-500" : ""}>Home</Link>
        <Link href="/products" className={pathName === "/products" ? "text-yellow-500" : ""}>Products</Link>
        <Link href="/profile" className={pathName === "/profile" ? "text-yellow-500" : ""}>Profile</Link>
      </div>

      {/* Auth */}
      <div className='flex items-center gap-4'>

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

            <span>{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>

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
    </nav>
  );
};

export default Navbar;
