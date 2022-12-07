import React from 'react';
import './Alternance.scss';
import { NavLink } from 'react-router-dom';


function Alternance() {
  return (
    <div className="alternance">
    <NavLink to='/'>
     <h1 className='alternance__title'>Alternance F.A.Q</h1>
    </NavLink>
    <div className="alternance__faq">
    <div className="alternance__Q">
     <h2 className="alternance__questions">Quand commence l'alternance ?</h2>
     <p className="alternance__answers">
      La session de formation débute le 6 Mars en centre de formation et le 20 Mars pour l'intégration en entreprise.
      Elle se termine le 23 Février 2024.
     </p>
     <h2 className="alternance__questions">Combien de temps dure l'alternance ?</h2>
     <p className="alternance__answers">
     La formation dure 12 mois (434 heures). De Mars 2023 à Février 2024.
     Rythme mensuel de 3 semaines en entreprise et 1 semaine en formation.
     </p>
     <h2 className="alternance__questions">Quelles sont les technologies enseignées au centre de formation ?</h2>
     <p className="alternance__answers">
       Lors de l'alternance, les langages développés en centre de formation sont React.js/React Native, Node.js, Typescript, NoSql, MySql, GraphQl, Docker et Flutter.
       Néanmoins, votre entreprise n'a pas pour obligation d'utiliser ces langages pour me recruter, en effet, je peux me former 
       à d'autres langages en entreprise et continuer d'en développer d'autres à l'école (ou chez moi).
     </p>
     <h2 className="alternance__questions">Ok, les technos c'est bien mais, les soft skills là dedans ?</h2>
     <p className="alternance__answers">
       À la Wild Code School, où je suis actuellement en formation, on nous apprends à travailler selon les methodes AGILE (SCRUM).
       En effet, pour chaque projet nous développons un backlog et effectuons les sprints en fonctions du temps imparti.
     </p>
     <h2 className="alternance__questions">Ok, je suis presque convaincu, mais ça engendre un coût</h2>
     <p className="alternance__answers">
      Le prix de la formation peut être pris en charge en grande parti par l'OPCO. Il restera néanmoins un reste à charge.
      Aide du Pole Emploi, plafonnée à 2000 euros .
      Pour plus d'informations, vous pouvez contacter <a className='sarah' href="mailto:sarah.souini@wildcodeschool.com ">Sarah Souini</a>, la responsable des admissions 
      à la Wild Code School.
     </p>
     </div>
     <div className="alternance__source">
       <h2 className="alternance__source__title">Ressources et liens utiles</h2>
        <ul className="alternance__source__ul">
            <li>OPCO :  <a href="https://travail-emploi.gouv.fr/ministere/acteurs/partenaires/opco">https://travail-emploi.gouv.fr/ministere/acteurs/partenaires/opco</a> </li>
            <li> Pole Emploi : <a href="https://www.pole-emploi.fr/employeur/aides-aux-recrutements/les-aides-a-lembauche/aide-a-lembauche-dun-demandeur-d.html">Aide à l'embauche.</a></li>
            <li>Wild Code School : <a href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance">https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance</a></li>
   
        </ul>
     </div>
     </div>



    </div>
  );
}

export default Alternance;
