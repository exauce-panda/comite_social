"use client"
import Navbar from "./Navbar";
export default function acceuil(){
    return(
      <main className="bg-white text-black">
        <h1 className="text-5xl font-bold font-serif">Comité social et culturel GILC</h1>

        <p className="text-gray-600 mt-2 font-light tracking-wide bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent  font-serif">
          Amour <span className="text-black">-</span> Solidarité <span className="text-black">-</span> Intégration <span className="text-black">-</span> communauté
        </p>
        <nav className="mt-8 flex justify-center gap-10 text-sm font-semibold uppercase">
          <Navbar />
        </nav>
      </main>
      );
      }