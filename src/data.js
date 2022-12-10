import olimPhoto from '../src/assets/img/olim.png'
import timeTravelPhoto from '../src/assets/img/timetraveler.png'
import drinkrPhoto from '../src/assets/img/drinkr.png'
import weekndPhoto from '../src/assets/img/theweeknd.png'
import montBlancPhoto from '../src/assets/img/Montblanc.png'
import rockPhoto from '../src/assets/img/game-index.png'
import sophiePhoto from '../src/assets/img/Sophie-Photography.png'
const data = [
  {
    id: 1,
    title: 'Olim',
    txt: "Olim est un site web et mobile permettant aux utilisateurs de  chiner ou d'acheter du mobilier, objets de décoration. ",
    stack: ['HTML', 'SCSS', 'React.js', 'Express.js', 'MySQL', 'GitHub'],
    github: 'http://www.github.com',
    photo: olimPhoto,
  },
  {
    id: 2,
    title: 'Time Travel',
    txt: 'Ce projet a été développé en 24h lors du hackaton de la Wild Code School. Le sujet était simple, livrer un projet web sur le thème du voyage. Nous avons décidé de développer un mini jeu dans le navigateur. Ce projet nous a valu le prix du jury. ',
    stack: ['HTML', 'SCSS', 'Vanilla.Js', 'GSAP', 'GitHub'],
    github: 'https://github.com/gregodges/time-travel',
    photo: timeTravelPhoto,
  },
  {
    id: 3,
    title: "Drink'r",
    txt: "Drink'r est un moteur de recherche de cocktails, faisant appel à un API. Il a été développé de A à Z en 6 semaines, en suivant la méthode AGILE.",
    stack: ['HTML', 'CSS', 'React.js', 'GitHub'],
    github: 'https://drink-r.netlify.app/',
    photo: drinkrPhoto,
  },
  {
    id: 4,
    title: 'The Weeknd',
    txt: "Ce site vitrine pour promouvoir la  tournée de l'artiste The Weeknd a été réalisé en 2 semaines dans le cadre d'un projet d'ecole.",
    stack: ['HTML', 'CSS', 'Vanilla.js', 'GitHub'],
    github: 'https://github.com/gregodges/theWeeknd-project',
    photo: weekndPhoto,
  },
  {
    id: 5,
    title: 'MontBlanc',
    txt: "Site vitrine réalisé pour travailler les notions en CSS et les bases de l'intégration via un projet du Youtuber BenjaminCode.",
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/gregodges/Montblanc',
    photo: montBlancPhoto,
  },
  {
    id: 6,
    title: 'Rock Paper Scissors',
    txt: "Mini jeu 'pierre papier ciseaux' développé pour apprendre les bases de JavaScript et l'algorithmie, ainsi que l'implémentation d'un Dark Mode.",
    stack: ['HTML', 'CSS', 'Vanilla.js'],
    github: 'https://github.com/gregodges/Rock-paper-scissors',
    photo: rockPhoto,
  },
  {
    id: 7,
    title: 'Sophie Photographies',
    txt: "Site vitrine pour une photographe fictive réalisé dans le but d'intégrer une école de developpement web.",
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/gregodges/Sophie-Photography',
    photo: sophiePhoto,
  },
];
export const XPProMain = [
  {
    id: 1,
    title: 'Agent commercial à bord des trains',
    entreprise: 'sncf',
    txt: "Ce poste à haute responsabilité en terme de sécurité consiste à réaliser les essais techniques et vérifications des rames: Présence et fonctionnement du matériel de sécurité et de communication. L'accueil des voyageurs et veiller au bon déroulement du voyage en autonomie.",
    years: 'Mars 2021 - Avril 2022',
    skills: ['Autonomie', "Travail d'équipe", 'Tâches de sécurité', 'Adaptabilité', 'Relation client'],
    icon: 'src/assets/img/train.png',
  },
  {
    id: 2,
    title: 'Personnel navigant commercial',
    entreprise: 'Norwegian Air Shuttle',
    txt: "En tant que steward  mes principales responsabilités consistaient à m'assurer que l'avion était opérationnel et que les passagers étaient à l'aise et en sécurité.",
    years: 'Mars 2018 - Mars 2021',
    skills: ['Autonomie', 'Agilité', "Coordination d'équipe", "Prise d'initiatives", 'Tâches de sécurité', 'Adaptabilité', 'veille'],
    icon: 'src/assets/img/plane.png',

  },
  {
    id: 3,
    title: 'Personnel navigant commercial',
    entreprise: 'Volotea',
    txt: "Volotea Airlines est une compagnie aérienne espagnole à bas prix. Elle relie principalement des capitales régionales et des petites et moyennes villes en Europe. Mes missions étaient de réaliser les essais techniques et vérifications de la cabine, la préparation commerciale, la vente pendant le vol ainsi que l'accueil et assistance aux passagers. Responsabilité du bon déroulement du vol.",
    years: 'Juin 2017 - Octobre 2017',
    skills: ['Autonomie', 'Agilité', "Coordination d'équipe", "Prise d'initiatives", 'Tâches de sécurité', 'Adaptabilité', 'veille'],
    icon: 'src/assets/img/plane.png',
  },
];

export const XPProSub = [
  {
    id: 1,
    title: 'Vendeur',
    entreprise: 'Carhartt',
    txt: 'Carhartt est une marque de prêt à porter Américaine. Mes missions consistaient à conseiller les clients.',
    years: '2017',
    skills: ['Écoute client', 'Communication', 'Sens du détail'],
  },
  {
    id: 2,
    title: 'Conducteur de remontées mécaniques',
    entreprise: 'Espace Cauterets',
    txt: 'Formation à la conduite de remontées mécaniques avant prise éffective de poste. Mes missions consitaient à accueilir la clientéles, et veiller au bon fonctionnement des télésiéges',
    years: '2014',
    skills: ['Tâches de sécurités', 'Communication', "Prise d'initiatives", 'Autonomie', 'Adaptabilité'],
  },
  {
    id: 3,
    title: 'Pâtissier',
    entreprise: 'Aux délices de Sophie',
    txt: 'Deux années en alternance dans une pâtisserie afin de valider un CAP pâtissier',
    years: '2007-2009',
    skill: ["Travail d'équipe", 'Autonomie'],

  },
];
export default data;
