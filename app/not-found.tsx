import Link from "next/link";
export default function Notfound() {
    return(
    <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-red-600">Page non trouvée ❌</h1>
          <p className="mt-4">La page que vous recherchez n'existe pas.</p>

          <Link href="/">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Retour à l'accueil
            </button>
          </Link>         
    </div>

    );
}