import Image from "next/image";
export default function Activite() {
  return (
    <div className="">
      <section>
      <div className="font-mono tracking-wide text-center bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">          
      <p className="p-6 font-bold">
           Découvrez les différentes activités que nous organisons pour soutenir notre communauté<span className="text-black">.</span> Nous proposons des ateliers éducatifs<span className="text-black">,</span> des événements sociaux<span className="text-black">,</span> des programmes de mentorat et bien plus encore pour répondre aux besoins de nos membres<span className="text-black">.</span>
      </p>    
      </div>
      </section>

      <section>
      <ul className="list-disc list-inside space-y-9 p-7">
        <li><h1 className="text-4xl font-bold text-myred pb-3">Ateliers <br></br> éducatifs</h1> <p className="text-lg font-light text-mybrown">Des sessions interactives sur divers sujets pour aider les jeunes à développer leurs compétences.</p></li>
        <li><h1 className="text-4xl font-bold text-myred pb-3">Événements <br></br>sociaux</h1> <p className="text-lg font-light text-mybrown">Des rencontres régulières pour favoriser les échanges et renforcer les liens communautaires.</p></li>
        <li><h1 className="text-4xl font-bold text-myred pb-3">Programmes <br></br>de mentorat</h1> <p className="text-lg font-light text-mybrown">Un accompagnement personnalisé pour les jeunes en quête de conseils et de soutien.</p></li>
      </ul>  
      </section>
    </div>
  )
}