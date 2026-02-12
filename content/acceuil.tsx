"use client"
import Image from "next/image"
import Navbar from "./Navbar";
export default function acceuil(){
    return(
          <main className="bg-white text-black">
      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-24 text-lg leading-relaxed text-left">

        {/* À PROPOS */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent  font-serif">À propos de nous</h2>
          <p>
            Nous sommes un pilier de notre mission d&apos;amour, de solidarité et d&apos;intégration
            communautaire. Basé à Ottawa, il vise à répondre aux besoins concrets des jeunes et des
            familles, particulièrement francophones, dans un esprit de compassion chrétienne.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6  font-serif">Historique</h3>
          <p>
            Fondé en Mai 2024, le Comité social et culturel de God is Love Center est né d&apos;une
            vision évangélique chrétienne de soutien spirituel et social. Avec le temps, le comité
            social et culturel a été structuré pour mieux répondre aux réalités locales des nouveaux
            arrivants, des familles en difficulté et de la jeunesse.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6  font-serif">Motivation</h3>
          <p>
            Animé par l&apos;amour de Dieu et le service aux autres, notre comité se donne pour
            mission de bâtir une communauté plus solidaire, accueillante et résiliente,
            où chacun peut s&apos;épanouir.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6  font-serif">Public cible</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li>Jeunes (15-30 ans)</li>
            <li>Familles de nouveaux arrivants et personnes vulnérables</li>
            <li>Personnes âgées (60 ans et +)</li>
          </ul>
        </div>

        {/* OBJECTIFS PRINCIPAUX */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent  font-serif">Objectifs principaux</h2>
          <p>
            Contribuer activement au bien-être global des jeunes, des familles et personnes âgées,
            en particulier francophones à Ottawa, en favorisant leur intégration sociale et
            culturelle, en renforçant la solidarité communautaire et en offrant un soutien concret
            et humanitaire, conformément à la mission chrétienne de God is Love Center.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6  font-serif">Objectifs spécifiques</h3>
          <ol className="list-decimal ml-8 space-y-8">

            <li>
              <strong>Favoriser l&apos;intégration des nouveaux arrivants</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Organiser des séances d&apos;information, d&apos;orientation et d&apos;accompagnement.</li>
                <li>Offrir des activités d&apos;accueil et de socialisation.</li>
              </ul>
            </li>

            <li>
              <strong>Apporter un soutien concret aux familles</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Aide logistique et matérielle lors de mariages, naissances, décès.</li>
                <li>Services de décoration et accompagnement événementiel.</li>
              </ul>        
            </li>

            <li>
              <strong>Apporter un soutien aux personnes âgées</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Accompagnement (épicerie, RDV médicaux, sorties communautaires).</li>
                <li>Visites de courtoisie.</li>
              </ul>                     
            </li>

            <li>
              <strong>Réduire la précarité alimentaire</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Gestion d’une banque alimentaire solidaire.</li>
                <li>Collaboration avec d&apos;autres organismes.</li>
              </ul>                  
            </li>

            <li>
              <strong>Renforcer la participation communautaire</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Mobiliser les bénévoles et ressources locales.</li>
                <li>Activités intergénérationnelles et culturelles.</li>
              </ul>                    
            </li>

            <li>
              <strong>Encourager le développement personnel et familial</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Ateliers pratiques : parentalité, finances, santé mentale…</li>
                <li>Création d’un cadre bienveillant et chrétien d’expression.</li>
              </ul>                     
            </li>

          </ol>
        </div>

        {/* VISION */}
        <div>
          <h2 className="font-serif text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">Vision</h2>
          <p>
            Être une référence chrétienne francophone d&apos;espoir et de solidarité dans la société
            canadienne, servant la communauté par l&apos;amour, l&apos;action et la foi.
          </p>
        </div>

        {/* MISSION */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent  font-serif">Mission</h2>
          <p>
            Offrir des services d&apos;entraide, de soutien et d&apos;accompagnement qui répondent aux
            besoins pratiques, sociaux et spirituels des familles et des jeunes dans une perspective
            chrétienne.
          </p>
        </div>

        {/* ORGANISATION INTERNE */}
        <div>
          <h2 className="font-serif text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">Organisation interne</h2>
          <p className="mb-12 text-center">
            Le Comité social et culturel est divisé en 4 départements principaux :
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Banque alimentaire</h3>
              <ul className="ml-6 space-y-1 text-center">
                <li>Distribution de denrées alimentaires.</li>
                <li>Partenariats avec des banques alimentaires locales.</li>
              </ul>
              <div className="flex flex-col justify-center md:flex-row p-[40px] gap-9">
              <Image 
              src="/image/activite/nouriture_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />
              <Image 
              src="/image/activite/nouriture.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />              
              </div>  
              <div className="text-center pb-7">___________________</div>                          
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Groupe d&apos;entraide</h3>
              <ul className="text-center ml-6 space-y-1">
                <li>Déménagement solidaire.</li>
                <li>Décoration lors des événements familiaux.</li>
              </ul>
              <div className="flex flex-col justify-center md:flex-row p-[40px] gap-9">
              <Image 
              src="/image/activite/decoration.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />
              <Image 
              src="/image/activite/jeunesse_jeu_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />              
              </div>    
              <div className="text-center pb-7">___________________</div>                                
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Soutien événementiel</h3>
              <ul className="ml-6 space-y-1 text-center">
                <li>Accompagnement pour mariages, naissances, intégrations.</li>
                <li>Soutien logistique, animation et célébration.</li>
              </ul>
              <div className="flex flex-col justify-center md:flex-row p-[40px] gap-9">
              <Image 
              src="/image/activite/enfent.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />
              <Image 
              src="/image/activite/bebe.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />              
              </div>         
              <div className="text-center pb-7">___________________</div>     
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Accompagnement</h3>
              <ul className="text-center ml-6 space-y-1">
                <li>Accueil des nouveaux arrivants.</li>
                <li>Orientation vers logement, emploi, santé.</li>
                <li>Ateliers d&apos;information (vie au Canada, francisation).</li>
              </ul>
              <div className="flex flex-col justify-center md:flex-row p-[40px] gap-9">
              <Image 
              src="/image/activite/vieEnRose_2.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />
              <Image 
              src="/image/activite/diplome.jpg" 
              alt="Acceuille des nouveaux"
              width={600}
              height={400}
              />              
              </div>                      
            </div>
          </div>
        </div>

        {/* RESSOURCES */}
        <div>
          <h2 className="font-serif text-4xl font-bold text-center mb-14 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">Fondation Elizabeth Greenshields</h2>
          <ul className="list-disc ml-8 space-y-2">
            <li>1814 rue Sherbrooke Ouest, Montréal (QC) H3H 1E4</li>
            <li>Téléphone : 514-937-9225</li>
            <li>Télécopieur : 514-937-0141</li>
            <li>Courriel : greenshields@bellnet.ca</li>
            <li>Site : elizabethgreenshieldsfoundation.org</li>
          </ul>

          <h2 className="font-serif text-4xl font-bold text-center mt-20 mb-10 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">Ressources supplémentaires</h2>

          <h3 className="text-2xl font-bold mb-4">Centre québécois de philanthropie</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li>5620 avenue Decelles, Montréal (QC) H3T 1W5</li>
            <li>Téléphone : 514-341-2547</li>
            <li>Site : fondationsquebec.ca</li>
          </ul>
        </div>

      </section>
    </main>
    );
}