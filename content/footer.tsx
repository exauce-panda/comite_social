import Image from "next/legacy/image";
import logoFacebook from "@/public/image/logos/facebook.png";
import logoInstagram from "@/public/image/logos/instagram.png";
import logoYoutube from "@/public/image/logos/youtube.png";
import logoTiktok from "@/public/image/logos/tiktok.png";

export default function Footer() {
    const socialLinks = [
        { href: "https://www.facebook.com/Godislovecenter?locale=fr_CA", img: logoFacebook, alt: "Facebook" },
        { href: "https://www.instagram.com/god_is_lovecenter", img: logoInstagram, alt: "Instagram" },
        { href: "https://youtube.com/@gilctv4549", img: logoYoutube, alt: "YouTube" },
        { href: "https://www.tiktok.com/@gilc_ottawa", img: logoTiktok, alt: "TikTok" },
    ];

    return (
        <footer className="text-center w-full bg-white py-10 px-6 items-start">

            {/* Bloc adresse EXACTEMENT comme ton image */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-4 font-serif">
                    COMITÉ SOCIAL GILC
                </h2>

                <p className="text-black">2285 St. Laurent Blvd Unit D-18</p>
                <p className="text-black">Ottawa (Ontario) K1G 4Z5</p>
                <p className="text-black">+1 (343) 553-4491</p>
                <p className="text-black">Email : contact@godislovecenter.com</p>
            </div>

            {/* Icônes sociales */}
            <div className=" gap-5 mb-8">
                {socialLinks.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={item.img} alt={item.alt} width={40} height={40} />
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} GILC-MEDIA — Tous droits réservés.
            </div>

        </footer>
    );
}
