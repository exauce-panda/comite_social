"use client";
import Image from "next/image";
export default function Services(){
    return(
        <div>
          <div>

        <p className="p-6 pt-5 text-center text-gray-600 mt-2 font-light font-mono tracking-wide bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
          Nous offrons differents services pour soutenir les jeunes<span className="text-black">,</span> les familles et les personnes âgées<span className="text-black">,</span> en particulier francophones à Ottawa<span className="text-black">,</span> dans un esprit de solidarité et d<span className="text-black">&apos;</span>intégration communautaire<span className="text-black">.</span>
        </p>

          <div className="space-y-12">
            <div>
              <div className="m-4 pt-10">
              <Image 
              src="/image/activite/nouriture_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />     
              </div>        
              <h3 className="m-4 text-5xl font-bold mb-4 text-myred">Banque alimentaire</h3>
              <ul className="m-4 space-y-1 text-mybrown">
                <li>Distribution de denrées alimentaires.</li>
                <li>Partenariats avec des banques alimentaires locales.</li>
              </ul>                        
            </div>

            <div className="text-right bg-gradient-to-r from-red-500 to-amber-600">           
              <h3 className="m-4 pt-10 text-5xl font-bold mb-4 text-mybelge">Groupe d&apos;entraide</h3>
              <ul className="m-4 space-y-1 text-mybelge">
                <li>Déménagement solidaire.</li>
                <li>Décoration lors des événements familiaux.</li>
              </ul>
              <div className="m-4 pb-10">
              <Image 
              src="/image/activite/nouriture_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />     
              </div>                                                    
            </div>

            <div>
               <div className="m-4 pt-10">
              <Image 
              src="/image/activite/nouriture_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />     
              </div>              
              <h3 className="m-4 text-5xl font-bold mb-4 text-myred">Soutien événementiel</h3>
              <ul className="m-4 space-y-1 text-mybrown">
                <li>Accompagnement pour mariages, naissances, intégrations.</li>
                <li>Soutien logistique, animation et célébration.</li>
              </ul>             
            </div>

            <div className="text-right bg-gradient-to-r from-red-500 to-amber-600">             
              <h3 className="m-4 pt-10 text-4xl font-bold mb-4 text-mybelge">Accompagnement</h3>
              <ul className="m-4 space-y-1 text-mybelge">
                <li>Accueil des nouveaux arrivants.</li>
                <li>Orientation vers logement, emploi, santé.</li>
                <li>Ateliers d&apos;information (vie au Canada, francisation).</li>
              </ul>  
              <div className="m-4 pb-10">
              <Image 
              src="/image/activite/nouriture_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />     
              </div>                                  
            </div>
          </div>
        </div>
        </div>
    );
}