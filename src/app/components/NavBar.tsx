"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <Link className="flex items-center justify-center" href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              height="120"
              width="120"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
