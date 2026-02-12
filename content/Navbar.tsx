import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4 flex justify-center gap-6">
        <Link href="/">Accueil</Link>
        <Link href="/don">Faire un don</Link>
        <Link href="/services">Services</Link>
        <Link href="/activite">Activités</Link>
        <Link href="/apropos">À propos</Link>
      </nav>
    );
}
        