"use client";

import Image from "next/image";
import Link from "next/link";

export default function Test(){
  return (
    <div className="font-barlow container lg:px-70 py-2 text-lg leading-relaxed">  

       <p className="pt-5 text-center text-gray-600 mt-2 font-light font-mono tracking-wide bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
          Amour <span className="text-black">-</span> Solidarité <br></br><span className="hidden text-black lg:block">-</span> Intégration <span className="text-black">-</span> communauté
        </p>

      <section className="py-7 m-4 lg:py-20">
      <div className="bg-gradient-to-r from-red-500 to-amber-600 p-4">
        <h1 className="pt-3 text-6xl font-sans font-bold md:text-5xl lg:text-6xl text-myred">
          Qui <br></br> sommes <br></br> nous
        </h1>

        <p className="pt-3 text-xl font-light text-white">
          Fondé en Mai 2024, le Comité social et culturel de God is Love Center est né d'une vision évangélique chrétienne de soutien spirituel et social. 
          Avec le temps, le comité social et culturel a été structuré pour mieux répondre aux réalités locales des nouveaux arrivants, des familles en difficulté et de la jeunesse.
          <br></br>
          Animé par l'amour de Dieu et le service aux autres, notre comité se donne pour mission de bâtir une communauté plus solidaire, accueillante et résiliente, où chacun peut s'épanouir.
        </p>
        <div className="flex justify-center mt-4">
          <Image src="/image/activite/bggtest.jpg" width={380} height={280} alt="Notre équipe" />
        </div>
      </div> 
      </section>    

      <section className="bg-myred text-white py-7 w-full lg:py-20">

        <h1 className="font-montserrat pt-3 pb-5 p-3 text-6xl text-center font-semibold md:text-5xl lg:text-6xl">
          Objectifs
        </h1>

        <p className="pt-3 p-8 text-xl text-center font-light">
            Contribuer activement au bien-être global des jeunes, des familles et personnes âgées,
            en particulier francophones à Ottawa, en favorisant leur intégration sociale et
            culturelle, en renforçant la solidarité communautaire et en offrant un soutien concret
            et humanitaire, conformément à la mission chrétienne de God is Love Center.
        </p>
        <ol className="text-white text-center space-y-8">

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />             
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Favoriser l&apos;intégration des nouveaux arrivants</strong>
            </li>

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />              
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Apporter un soutien concret aux familles</strong>       
            </li>

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Apporter un soutien aux personnes âgées</strong>                   
            </li>

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Réduire la précarité alimentaire</strong>            
            </li>

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Renforcer la participation communautaire</strong>                   
            </li>

            <li className="relative flex justify-center items-center">
              <Image src="/image/activite/bggtest.jpg" width={280} height={280} alt="icon objectif" />
              <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Encourager le développement personnel et familial</strong>                    
            </li>

        </ol>
        
      </section>      

      <section className="pt-20 py-1 lg:py-20">
        <div className="flex items-center pb-6">
          <h3 className="ml-8 text-8xl font-semibold text-myred">
            Public <br></br> cible
          </h3>
        </div>

        <p className="font-light text-white leading-relaxed">
          <ul className="m-8 space-y-2">
            <li className="bg-gradient-to-r from-red-500 to-amber-600 p-8 text-center">Jeunes (15-30 ans)</li>
            <li className="bg-gradient-to-r from-red-500 to-amber-600 p-8 text-center">Familles de nouveaux arrivants et personnes vulnérables</li>
            <li className="bg-gradient-to-r from-red-500 to-amber-600 p-8 text-center">Personnes âgées (60 ans et +)</li>
          </ul>
        </p>
      </section>
      
    </div>
  );
}