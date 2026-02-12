export default function Activite() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Nos Activités</h1>
      <p className="mb-6">
        Découvrez les différentes activités que nous organisons pour soutenir notre communauté. Nous proposons des ateliers éducatifs, des événements sociaux, des programmes de mentorat et bien plus encore pour répondre aux besoins de nos membres.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Ateliers éducatifs :</strong> Des sessions interactives sur divers sujets pour aider les jeunes à développer leurs compétences.</li>
        <li><strong>Événements sociaux :</strong> Des rencontres régulières pour favoriser les échanges et renforcer les liens communautaires.</li>
        <li><strong>Programmes de mentorat :</strong> Un accompagnement personnalisé pour les jeunes en quête de conseils et de soutien.</li>
      </ul>  
    </div>
  )
}