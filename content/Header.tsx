"use client";

import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="text-black">
      <div>
        <div className="container mx-auto">
          <div className="lg:flex items-center justify-between py-6 lg:pt-10 lg:px-70">
            
            {/* Logo */}
            <Link href="/" className="flex justify-center items-center p-2 pb-9">
              <span className="mr-2">
                <img src="/image/logos/logoGilc.png" alt="logo" width="70" height="70"/>
              </span>
              <p className="text-xl font-bold text-primary lg:flex">
                <p className="m-0 leading-none">Comité social et</p>
                <p className="m-0 leading-none">culturel GILC</p>
              </p>
            </Link>
            
            {/* Desktop Menu */}
            <div className="">
              <ul className="flex justify-center items-center gap-4 pb-4">
                {[
                  { name: "Activités", path: "/activite" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name} className="group relative">
                    <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                    <Link
                      href={item.path}
                      className=" font-montserrat underline px-2 text-lg bg-black hover:bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:block">
              <Link
                href="/don"
                className="px-4 py-2 pr-7 pl-7 bg-transparent border-2 border-red-500 text-red-500 rounded-full hover:from-red-600 hover:to-amber-700 transition-all"
              >
                Faire un don
              </Link>
            </div>

            {/* Mobile Button 
            <button
              className="lg:hidden text-3xl"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </button>
            */}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu 
        <div
          className={`fixed inset-0 z-50 flex bg-black bg-opacity-80 transition-opacity lg:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3 relative">
            <button
              className="absolute top-4 right-4 text-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="mt-8 flex flex-col">
              {[
                { name: "Intro", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: "Uses", path: "/uses" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="mb-3 block px-2 font-body text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        */}
      </div>
      <div>
      </div>     
    </div>
  );
}