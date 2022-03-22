const ProductsData = [
  {
    id: 0,
    productName: "Calculatrice Parlante",
    description: "Le VarioUltra est un bloc-notes braille fabriqué par Baum",
    longDescription:
      "Cette calculatrice munie de gros caractères et d’une fonction vocale, au design moderne et élégant, vous permettra d’effectuer les 4 opérations de base et les pourcentages. Elle vous servira aussi d’horloge avec annonce vocale et de réveil grâce à sa fonction alarme.",
    details: `- Ecran à cristaux liquides légèrement relevé (10 chiffres d’une hauteur de 21 mm chacun)
      -	Touches de mémoire : plus, moins, rappel, effacement (elles servent également aux réglages de la date,
         de l’heure et de l’alarme)
      -	Possibilité de faire énoncer les nombres soit globalement, soit chiffre par chiffre
      -	Possibilité de désactiver la synthèse vocale
      -	Réglage du volume : oui (sur 2 niveaux)
      -	Touche répétition
      -	Annonce de l’heure : oui
      -	Annonce de la date : non, elle sera seulement affichée et réglée mais ne sera jamais énoncée
      -	Fonction alarme avec réveil par des bips et l’annonce de l’heure
      -	Prise écouteurs : oui (écouteurs non fournis)
      `,
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/calculatriceparlante.jpg",
    category: "CALCUL",
  },
  {
    id: 1,
    productName: "Cubarithme",
    description:
      "Ce plateau en plastique de 15 rangées de 20 cases sert à l'apprentissage de l'arithmétique ",
    longDescription: `Ce plateau en plastique de 15 rangées de 20 cases sert à l'apprentissage de l'arithmétique (avec les cubes référence 15001) et de l'algèbre (avec les cubes référence 15002).
    L'utilisation de cubes algébriques (référence 15002) permet également de composer des grilles de mots croisés
    `,
    details: `
    -	Dimensions du plateau : 19 x 25 cm
    -	Dimensions d'une case : 10 mm de côté
    `,
    price: "4500.00",
    stars: "4",
    producImg: "/imgs/CUBARITHME.png",
    category: "CALCUL",
  },
  {
    id: 2,
    productName: "Cubes Arithmétiques Par 100",
    description: "Ces cubes arithmétiques en plastique",
    longDescription: `Ces cubes arithmétiques en plastique, alourdis d'une bille en acier et marqués en relief sur chacune des faces, permettent d'écrire des chiffres braille en les positionnant sur le plateau (référence 15000).`,
    details: `
    -	Conditionnés par boîte de 100 cubes
    -	Dimensions d'un cube : 9 mm de côté
`,
    price: "12 000.00",
    stars: "4",
    producImg: "/imgs/cubesArith.png",
    category: "CALCUL",
  },
  {
    id: 3,
    productName: "Feuille à Dessin A4",
    description: "Rames de 600 feuilles",
    longDescription:
      "En plastique transparent, ces feuilles sont utilisées pour la réalisation de DESSIN à l'aide de la planche référence.",
    details: `
    -	Conditionnées par 600 feuilles environ`,
    price: "20 000.00",
    stars: "4",
    producImg: "/imgs/A4.png",
    category: "DESSIN",
  },
  {
    id: 4,
    productName: "Ensemble d’équerres",
    description: "En plastique rigide",
    longDescription:
      "En plastique rigide, elles sont graduées en relief sur chacun des côtés de l'angle droit.",
    details: `
    •	L'ensemble comprend :
-	1 équerre à angles de 30° et 60°
-	1 équerre à angle de 45°
•	Graduations :
-	1 point tous les demi-centimètres
-	2 points tous les centimètres
-	3 points tous les 5 centimètres

•	Longueur des hypoténuses :
-	16,5 cm pour l'équerre à 45°
-	19 cm pour l’équerre de 30° à 60°
`,
    price: "5000.00",
    stars: "4",
    producImg: "/imgs/kous.png",
    category: "DESSIN",
  },
  {
    id: 5,
    productName: "Compas à Pointe Sèche ",
    description: "Ce compas est muni d'une pointe sèche ",
    longDescription:
      "Ce compas est muni d'une pointe sèche pour effectuer des tracés en relief sur des feuilles plastique références 16500 et 16503 et en prenant pour support la planche à dessiner référence 16000. La pointe sèche peut être remplacée par une mine de crayon ou un crayon.",
    details: "",
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/compa.png",
    category: "DESSIN",
  },
  {
    id: 6,
    productName: "Planche à Dessiner 25 x 35 cm",
    description: "en matière caoutchoutée antidérapante",
    longDescription:
      "Cette planche à dessiner, en matière caoutchoutée antidérapante, est utilisée pour effectuer des tracés en relief sur une feuille plastifiée, à l'aide d'un stylo, d'un crayon à dessiner, d'une roulette ou d'un poinçon.",
    details: `
    Format (largeur x longueur) : 24 x 35 cm`,
    price: "5500.00",
    stars: "4",
    producImg: "/imgs/dessinBlanc.jpg",
    category: "DESSIN",
  },
  {
    id: 7,
    productName: "Triple Décimètre en Plastique",
    description: "Cette règle plate en plastique est graduée en relief",
    longDescription:
      "Cette règle plate en plastique est graduée en relief. Elle permet aussi aux personnes malvoyantes de se repérer grâce aux deux couleurs contrastées comme le jaune et le noir.",
    details: `
    -	Sur un côté de la règle :
    -	1 petit trait tous les 5 millimètres
    -	1 trait plus grand tous les centimètres (chaque centimètre est alternativement jaune ou noir)
    -	1 trait faisant toute la largeur de la règle tous les 5 centimètres
    -	Sur l'autre côté de la règle :
    -	1 encoche tous les 5 millimètres
    -	1 trait tous les centimètres (chaque centimètre est alternativement jaune ou noir)
    -	Sous la règle sont placées 6 pastilles antidérapantes
    -	Largeur : 3,2 cm
    -	Poids : 40 g
`,
    price: "1800.00",
    stars: "4",
    producImg: "/imgs/regle.png",
    category: "DESSIN",
  },
  {
    id: 8,
    productName: "Rapporteur",
    description: "En plastique rigide",
    longDescription:
      "En plastique rigide, ce rapporteur est gradué en relief pour vous permettre une lecture précise.",
    details: `
    -	1 point tous les 10°
    -	2 points pour 90°
    -	Une encoche permet de repérer le centre
    -	Diamètre : 12 cm
    -	Poids : 20 g
`,
    price: "800.00",
    stars: "4",
    producImg: "/imgs/RAPPORTEUR.png",
    category: "DESSIN",
  },
  {
    id: 9,
    productName: "Roulette à Dessiner",
    description:
      "Cette roulette à dessiner est munie d'un petite roue métallique crantée fixée au bout d'un manche en bois",
    longDescription:
      "Cette roulette à dessiner est munie d'un petite roue métallique crantée fixée au bout d'un manche en bois. Elle permet de dessiner en relief sur des feuilles plastique en prenant pour support la planche à dessiner.",
    details: `
    -	Hauteur du manche : 9 cm
    -	Poids : 10 g
`,
    price: "1500.00",
    stars: "4",
    producImg: "/imgs/roullete.png",
    category: "DESSIN",
  },
  {
    id: 10,
    productName: "Canne Française",
    description: "1,20 M – Embout Tournant",
    longDescription: `Élastique interchangeable reliant les segments entre eux Dragonne interchangeable
    `,
    details:
      "Comme le t-shirt classique, mais en légèrement plus près du corps. Coupe ajustée. Si vous préférez une coupe moins près du corps, commandez une taille au-dessus ou jetez un coup d œil au t-shirt classique.   Le modèle mesure 1,83 m et porte une taille L. La modèle mesure 1,73 m et porte une taille S. Tissu de poids moyen : 145 g/m² (4,2 oz). Les t-shirts unis sont 100 % coton, les gris chinés 90 % coton et 10 % polyester, les gris anthracite chinés 52 % coton et 48 % polyester.",
    price: "1500.00",
    stars: "4",
    producImg: "/imgs/canne.png",
    category: "DIVERS",
  },
  {
    id: 11,
    productName: "Podomètre / Radio FM",
    description: "",
    longDescription: "",
    details: `
    -	Boîtier plastique noir et gris de forme ovale.
    -	Afficheur à cristaux liquides (hauteur des chiffres 6 mm).
    -	Touches de réglage et permettant d'activer la synthèse vocale.
    -	Clip de fixation à la ceinture.
    -	Livré avec écouteur.
    -	Alimentation : 2 piles R3 
    -	Taille en cm (LxPxH) : 7,2 x 5,9 x 2,9.
    -	Poids (en g) : 40.
`,
    price: "4500.00",
    stars: "4",
    producImg: "/imgs/radio.png",
    category: "DIVERS",
  },
  {
    id: 12,
    productName: "Réveil- Calendrier Parlant ",
    description:
      "Cet appareil sans afficheur est spécialement conçu pour les personnes déficientes visuelles.",
    longDescription: `Cet appareil sans afficheur est spécialement conçu pour les personnes déficientes visuelles.
    Il se présente sous la forme d'un boîtier noir dont le dessus est beige et rouge. Quatre touches permettent d'accéder à 
    toutes les fonctions de l'appareil.
    La voix digitalisée, de bonne qualité, est agréable à entendre.
    Un couvercle permet de ne laisser apparentes que les deux touches permettant l'annonce de l'heure et de la date.
    `,
    details: `
    Fonctions :
    -	Montre avec bips horaires à la demande
    -	Alarme à répétition avec, au choix : 6 sonneries différentes, chant du coq, chant du coucou, sonnerie de réveil à l'ancienne,
     aboiements, miaulement, soit 11 possibilités.
    -	Calendrier avec passage automatique de l'heure d'hiver à l'heure d'été et réciproquement.
    Caractéristiques :
    -	Clavier 4 touches 
    -	Volume réglable (8 niveaux)
    -	Alimentation : 1 pile rectangulaire 9 volts type LR622

`,
    price: "-",
    stars: "4",
    producImg: "/imgs/reveil.png",
    category: "HORLOGERIE",
  },
  {
    id: 13,
    productName: "Montre Parlante",
    description: "Montre parlante avec affichage à cristaux liquides",
    longDescription: `-	Boîtier en plastique
    -	Cadran à cristaux liquides (hauteur des chiffres : 4 mm)
    -	Réglages et annonce de l'heure par pression de boutons placés sur le côté du boîtier
    -	Bracelet en plastique
    `,
    details: ``,
    price: "-",
    stars: "4",
    producImg: "/imgs/smartwatch.png",
    category: "HORLOGERIE",
  },
  {
    id: 14,
    productName: "Réveil Parlant de Chevet",
    description: "Ce réveil en forme de demi-lune",
    longdescription:
      "Ce réveil en forme de demi-lune, simple d'utilisation et au design sobre, trouvera sa place dans votre intérieur",
    details: `
    -	Boîtier plastique blanc brillant au toucher doux
    -	Afficheur à cristaux liquides avec une hauteur des chiffres de 12mm
    -	Rétro-éclairage bleu de l'afficheur lors de l'annonce vocale de l'heure
    -	Large touche d'activation de la synthèse vocale sur le dessus du réveil
    -	Bouton de réglages de l'heure et de l'alarme situé à gauche de l'afficheur
    -	Boutons de réglages des minutes et des heures situés à droite de l'afficheur
    -	3 niveaux de volume sonore avec réglage par commutateur situé sur le dessous
    -	Alimentation : 3 piles rondes de type LR06 
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/reveilparlante.png",
    category: "HORLOGERIE",
  },
  {
    id: 15,
    productName: "Ballon de Cécifoot – Torball ",
    description: "Ce ballon de Cécifoot",
    longDescription:
      "Ce ballon de Cécifoot / torball, en plastique rouge, est munie de grelots à l'intérieur permettant aux non-voyants de le localiser lorsqu'il roule.",
    details: `
    -	Diamètre : 21 cm
    -	Poids : 500 g
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/redball.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 16,
    productName: "Boite A Poids",
    description: "(12 pièces)",
    longDescription: `Le jeu se compose de 12 pièces en bois de poids différent.
    Les 12 pièces sont rangées sur un socle en bois
    Dimensions socle : 21 x 16,5 cm
    `,
    details: `
    -	Diamètre : 21 cm
    -	Poids : 500 g
`,
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/poid.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 17,
    productName: "Boite A Son",
    description: "(12 pièces)",
    longDescription: `Le jeu se compose de 12 pièces en bois émettant chacune un son différent.
    Les 12 pièces sont rangées sur un socle en bois
    Dimensions socle : 31 x 24 cm
    
    `,
    details: `
    -	Diamètre : 21 cm
    -	Poids : 500 g
`,
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/boiteson.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 18,
    productName: "Jeu de Domino en Bois Points en Relief",
    description: "Pour 2 à 4 joueurs à partir de 6 ans.",
    longDescription: `Le but du jeu est de parvenir le premier à placer tous ses dominos sur la table. Le jeu comprend 28 dominos en bois naturel clair marqués en relief par des points couleur acajou.`,
    details: `
    Caractéristiques :
    Livré dans un plumier en bois.
    Dimensions d'un domino (largeur x longueur x épaisseur) : 2,5 x 5 x 1 cm
    Dimensions de la boîte (largeur x longueur x épaisseur) : 14 x 20,7 x 4,5 cm    
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/domino.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 19,
    productName: "Memory Tactile",
    description: "Ce Jeu éducatif est destiné aux enfants à partir de 5 ans.",
    longDescription: `Le jeu se compose de 32 pièces rondes en bois formant 16 paires de textures différentes.`,
    details: `
    Utilisation du jeu :
    Pour les plus jeunes, il s'agira de rapprocher les paires identiques.
    Il peut aussi être utilisé comme un jeu de memory pour jouer à plusieurs.       
`,
    price: "13 500.00",
    stars: "4",
    producImg: "/imgs/tactile.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 20,
    productName: "Zoom Text Logiciel",
    description: "des images claires, une navigation aisée",
    longDescription: `Grâce au logiciel de grossissement ZOOMTEXT édité par AiSquared, les utilisateurs mal-voyants vont découvrir un nouveau concept d'agrandissement et de lecture d’écran : l'accès aux documents, tableurs, pages web et courriers devient plus rapide, plus facile et plus précis que jamais.

    ZOOMTEXT MAGNIFIER : des images claires, une navigation aisée, une facilité incomparable d'utilisation et le plus haut niveau de compatibilité.
    `,
    details: `
    Caractéristiques techniques :

    -	Agrandissement modulable : un agrandissement de 1 à 36 fois et 8 fenêtres zoom différentes vous permettent de configurer votre vue, agrandie, conformément à vos besoins.
    -	La nouvelle technologie "xFont" améliore la qualité d'affichage du texte. Les polices de caractères les plus graphiques sont parfaitement lisibles, quel que soit le grossissement utilisé.
    -	Amélioration des couleurs : des commandes innovantes de gestion des couleurs augmentent la clarté de l'écran et réduisent la fatigue oculaire. Les effets spéciaux incluent le mode teinté, bicolore et autres options permettant le remplacement des couleurs incommodantes.
    -	Visibilité des pointeurs et curseurs : il est possible de changer la couleur et la taille du pointeur de la souris pour le visualiser plus facilement. Des
    -	Localisateurs spéciaux rendent également le curseur de texte aisément repérable et facile à suivre.
    -	Définition de zones de lecture : d'un simple raccourci clavier, l'agrandissement se positionne sur des champs ne définis pas l'utilisateur.
    -	La nouvelle fonction Recherche de Texte localise rapidement dans l'application le mot ou la phrase saisie.
    -	L'enregistrement de "profils" sauvegarde les paramètres d'affichage définis pour chaque application.
      
`,
    price: "189 350.00",
    stars: "4",
    producImg: "/imgs/zoomtext.png",
    category: "LOGICILE",
  },
  {
    id: 21,
    productName: "Logiciel JAWS Pour Windows FR/AR",
    description: "JAWS (Job Access With Speech)",
    longDescription: `un logiciel de revue d'écran pour déficients visuels édité par la société Freedom Scientific.

    Le logiciel de revue d'écran JAWS offre un accès vocal complet à l'environnement Windows et aux applications logicielles tant standard que spécifique.
      `,
    details: `
    Le logiciel de revue d'écran JAWS offre un accès vocal complet à l'environnement Windows et aux applications logicielles tant standard que spécifique. Un afficheur braille peut-être connecter pour une lecture braille.

    Conforme à l'interface de Windows, le lecteur d'écran JAWS n'en redéfinit pas la structure et vous fait appréhender cet environnement de la même manière qu'une personne voyante, ce qui facilite considérablement l'intégration. 
    
    JAWS interagit avec l'utilisateur en tirant étroitement partie de nombreux raccourcis claviers proposés en standard sous Windows et n'entre pas en conflit avec les touches utilisées par les autres applications. Très puissant et simple d'utilisation.
    
    JAWS présente des caractéristiques jusqu'à ce jour inédites : 
    
    -	Des fonctions de lecture regroupées sur le pavé numérique très faciles d'accès.
    -	4 Curseurs au choix pour naviguer facilement.
    -	Une configuration "à la carte".
    -	Une grande flexibilité.
    -	Un étiqueteur de graphiques manuel ou automatique.
    -	Une optimisation accrue pour la navigation sur Internet.
    -	Un éditeur de scripts et son langage intégrés.
    -	Le support pour de nombreux synthétiseurs vocaux et terminaux braille.
    -	Synthèse vocal Acapela infovox SAPI5 Français, arabe.    
`,
    price: "348 000.00",
    stars: "4",
    producImg: "/imgs/JAWS.png",
    category: "LOGICILE",
  },
  {
    id: 22,
    productName: "DBT 11.2",
    description: "DUXBURY BRAILLE TRANSLATOR",
    longDescription: `DBT Win est un logiciel permettant la transcription en braille intégral ou abrégé de textes saisis « en noir ». Utilisé par la Majorité des producteurs de braille dans le monde. `,
    details: `
    -	Deux modes disponibles pour la saisie du texte : Clavier AZERTY ou Clavier braille Perkins.
-	Impression en interligne intégrée permettant d'obtenir le braille en noir sous les caractères d'imprimerie.
-	Transcription en braille intégral ou abrégé pour une quarantaine de langues différentes (arabe inclus), avec ou sans césure.
-	 Numérotation automatique des pages, avec possibilité de double Pagination.
-	Importation des fichiers saisis dans les logiciels de traitement de texte populaires (Microsoft Word, WordPerfect, etc.), des fichiers en format HTML, ICADD ou ASCII avec ou sans formatage, des fichiers créés dans les anciens éditeurs de braille (EDGAR, Polkadot, etc.) ou provenant d'anciennes versions de Duxbury, etc.
-	Importation depuis WORD : traitement de toutes les voyelles accentuées, caractères spéciaux, des listes à puces et à numéros, paramétrage de l'importateur.
   
`,
    price: "185 000.00",
    stars: "4",
    producImg: "/imgs/DBT.jpg",
    category: "LOGICILE",
  },
  {
    id: 23,
    productName: "DBT 11.2",
    description: "Duxburi Braille Translator",
    longDescription: `DBT Win est un logiciel permettant la transcription en braille intégral ou abrégé de textes saisis « en noir ». Utilisé par la Majorité des producteurs de braille dans le monde. `,
    details: `
    -	Deux modes disponibles pour la saisie du texte : Clavier AZERTY ou Clavier braille Perkins.
-	Impression en interligne intégrée permettant d'obtenir le braille en noir sous les caractères d'imprimerie.
-	Transcription en braille intégral ou abrégé pour une quarantaine de langues différentes (arabe inclus), avec ou sans césure.
-	 Numérotation automatique des pages, avec possibilité de double Pagination.
-	Importation des fichiers saisis dans les logiciels de traitement de texte populaires (Microsoft Word, WordPerfect, etc.), des fichiers en format HTML, ICADD ou ASCII avec ou sans formatage, des fichiers créés dans les anciens éditeurs de braille (EDGAR, Polkadot, etc.) ou provenant d'anciennes versions de Duxbury, etc.
-	Importation depuis WORD : traitement de toutes les voyelles accentuées, caractères spéciaux, des listes à puces et à numéros, paramétrage de l'importateur.
   
`,
    price: "185 000.00",
    stars: "4",
    producImg: "/imgs/perkins.png",
    category: "Machine à écrire",
  },
  {
    id: 24,
    productName: "Papier Non Perforé ",
    description: "Format A4 160 G – 250 FEUILes ",
    longDescription: `
    Ce papier est recommandé pour l'écriture de documents à conserver. Il peut être utilisé avec la tablette format A3 ou avec une machine à écrire le braille ou avec les imprimantes braille acceptant le feuille à feuille.
     `,
    details: `
    -	Format : 42 x 29,7 cm, non perforé
-	Grammage : 160 g
-	Conditionné par 250 feuilles
-	Poids : 25 kg

`,
    price: "2150.00",
    stars: "4",
    producImg: "/imgs/papier.png",
    category: "Machine à écrire",
  },
  {
    id: 25,
    productName: "Machine Perkins Uni-manuelle",
    description: "Machine à écrire le braille, mécanique et portable.",
    longDescription: `
    Mêmes caractéristiques que la machine Perkins référence 11000, mais permettant d'écrire d'une seule main, 2 frappes successives étant nécessaires pour écrire un caractère. `,
    details: `-	Couleur grise
    -	Dimensions (largeur x longueur x hauteur) : 15 x 23 x 39 cm
    -	Poids : 4,8 kg    
`,
    price: "196 000.00",
    stars: "4",
    producImg: "/imgs/mperkins.png",
    category: "Machine à écrire",
  },
  {
    id: 26,
    productName: "Papier Listing",
    description: "170 G – 250 FEUILLES",
    longDescription: `
    Ce papier est à utiliser avec une imprimante braille exigeant ce type de papier pour l'édition de documents en continu.
    `,
    details: `-	Format : 12 pouces (24 perforations de part et d'autre de la feuille sur bandes Carroll)
    -	Conditionnement : 250 feuilles
    -	Grammage : 170 g
    -	Dimensions hors bandes Carroll : 21 x 30,5 cm
    -	Dimensions avec bandes Carroll : 24 x 30,5 cm
    -	Bande Carroll droite et gauche détachables
    -	Poids : 3,3 kg
      
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/papers.png",
    category: "Machine à écrire",
  },
  {
    id: 27,
    productName: "Feuille Pour Thermoformage A4",
    description: "Rames de 200 feuilles ",
    longDescription: `Ces feuilles sont à utiliser avec la thermo formeuse.  Ce papier est à utiliser avec une imprimante braille exigeant ce type de papier pour l'édition de documents en continu.
    `,
    details: `
    •	Epaisseur : Fin 0,12 mm
    •	Format de la feuille : 21 x 29,7 (A4)
    •	Couleur : Blanc
    •	Conditionnement : 100 feuilles
    •	Poids : environ 1 kg
    
      
`,
    price: "88 000.00",
    stars: "4",
    producImg: "/imgs/four.png",
    category: "Machine à écrire",
  },
  {
    id: 28,
    productName: "Index Evrest DV5",
    description:
      "Imprimante Braille feuille à feuille : L'impression rapide pour tous formats.",
    longDescription: `L’imprimante Index Evrest D-V5 est la dernière version des célèbres imprimantes Braille INDEX, réputées pour leur qualité et la haute résolution des points braille.
    C’est une embosseuse braille recto verso ave chargeur feuille à feuille.
    L’embossage est maintenant possible tant horizontalement que verticalement.`,
    details: `
    
    L’Evrest -D V5 permet d’embosser textes Braille et éléments graphiques sur des feuilles simples, des livres (Format livret automatique), des étiquettes ainsi que des cartes de visites.
    C’est l’embosseuse la plus polyvalente du marché. 
    
    Très pratique l’embossage peut se faire à partir d’un Smartphone ou d’une Tablette ainsi que le paramétrage, grave au logiciel gratuit Indexa IdB.
    
    
    Amélioration par rapport aux modelés précédents : 

    -	Vitesse d’impression plus rapide et consommation d’énergie inférieure.
    -	Compatibilité avec les appareils mobiles.
    -	Logiciel idB d’Index.
    -	Messages vocaux produits par la voix de synthèse Acapela.
    -	Port USB pour impression directe à partir d’une clé USB pour la sauvegarde.
    -	Poids réduit à 12Kg.
    
    Les fonctionnalités les plus modernes 
    Wifi – USB – Connectivité avec appareils mobiles.
    
    Caractéristiques 
    -	Embossage feuille à feuille 
    -	Vitesse d’impression de 400 pages format A4/ heure
    -	Résolution 100 dpi et interligne ajustable
    -	Grammage du papier de 120 à 180 g
    -	Largeur de la page de 13 cm à 29.7 cm
    -	Longueur de page de 10 cm à 59 cm 
    -	Chargeur de papier de 50 pages 
    -	Impression 6 ou 8 points 
    -	Jusqu’à 48 caractères par ligne 
    -	Synthèse vocale pour les commandes, menus et sélections 
    -	Interface USB, LAN, Wi-Fi et Bluetooth 
    -	Compatible avec Smartphones et tablettes 
    -	Drivers pour Windows, Mac et Linux
    -	Interface Web pour paramétrage et statut 
    -	Dimension : L56xH45xP18 Cm 
    -	Poids : 12 Kg
    -	Bruit : Inf à 60dB avec caisson insonorisant 
    -	Consommation : 140 W en impression et 5 W en veille 
       
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/info2.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 29,
    productName: "Imprimante Braille INDEX Braille BOX V5",
    description: "L’imprimante Braille Box, fabriquée par Index",
    longDescription: `L’imprimante Braille Box, fabriquée par Index, est une embosseuse R/V destinée à l'impression de livres en braille, elle produit directement des ouvrages (livres, journaux) dans un format cahier "prêt à relier". `,
    details: `Caractéristiques 
    -	Haute vitesse : 800 pages par heure.
    -	Excellente qualité du point braille
    -	Le bac d'alimentation peut contenir jusqu'à 400 pages.
    -	Alimentation des feuilles très stable.
    -	Étonnant niveau de bruit faible.
    -	Alimentation A3 pliée pour un format final A4.
    
    Volumes de production élevés :
    La Braille Box est la meilleure embosseuse pour la production de volume élevé de braille, en utilisant du papier copie ordinaire. Elle possède également le meilleur mode d'alimentation jamais utilisé dans une imprimante braille.
    Braille Box est une réussite d'INDEX Braille, donnant aux utilisateurs ce qu'ils ont demandent à l'impression de grands volumes
      
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/info5.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 30,
    productName: "Imprimante Braille Basic-D V5",
    description:
      "L’imprimante-embosseuse braille Basic-D est fabriquée par INDEX Braille.",
    longDescription: `L’imprimante-embosseuse braille Basic-D est fabriquée par INDEX Braille.

    Best-seller depuis des années, l'embosseuse Basic- D utilise du papier tracté pour produire du braille de qualité en recto ou recto/verso.
    `,
    details: `-	Format compact.
    -	100 caractères par seconde.
    -	Impression à partir d'appareils portables.
    -	Panneau de commande en noir et braille.
    -	Tracteur auto-alimenté : méthode d'alimentation du papier la plus fiable.
    -	25 ans d’expérience 
      
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/info1.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 31,
    productName: "Imprimante Embosseuse Braille Indexa Evrest D-V4",
    description: "Evrest D-V4",
    longDescription: `INDEX EVREST est une embosseuse R/V, avec un chargeur feuille dont la vitesse est de 100 caractères par seconde.
    EVREST possède un niveau sonore très bas ne nécessitant pas de capot insonorisant, des points de brailles d’excellente qualité, une sélection des paramètres contrôlés par un affichage numérique. 
     `,
    details: `Autonomie	              -Oui
    Synthèse vocale	                  -Oui
    Touches de navigation           	-Oui
    Type de clavier (pour la saisie)	-Non
    Lecteur carte mémoire           	-Non
    Connexion Bluetooth             	-Non
    Connexion RS232	                  -Non
    Connexion USB	                    -Oui
       
`,
    price: "-",
    stars: "4",
    producImg: "/imgs/info6.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 32,
    productName: "Puzzle Géométrique En Bois",
    description: "Jeu éducatif pour enfant à partir de 3 ans.",
    longDescription: `Jeu éducatif pour enfant à partir de 3 ans.`,
    details: `
    Objectif du jeu : 

    Disposer les pièces selon la forme géométrique, ce jeu se compose de 40, 44 pièces géométriques colorées. Les formes s'encastrent sur un plateau en forme rectangulaire.       
`,
    price: "6500.00",
    stars: "4",
    producImg: "/imgs/PUZZLE.png",
    category: "Matériels Pédagogique",
  },
  {
    id: 33,
    productName: "Puzzle Chiffres",
    description: "En bois (10 pièces)",
    longDescription: `En bois, avec un logement séparé pour chaque chiffre `,
    details: ` 
    -	Socle en bois naturel clair 
    -	Pièces en bois coloré de 6 couleurs différentes. 
    -	Dimensions : 22,2 x 29,6 cm
     `,
    price: "-",
    stars: "4",
    producImg: "/imgs/puzzleChiffres.jpg",
    category: "Matériels Pédagogique",
  },

  {
    id: 34,
    productName: "Xylophone Pour Enfant",
    description:
      "lames en acier de différentes couleurs et de différentes longueurs",
    longDescription: `Le xylophone est constitué de lames en acier de différentes couleurs et de différentes longueurs fixées sur un support en bois, qui sont frappées au moyen de mailloches terminées par une sphère. La disposition des lames est semblable à celle du clavier de piano.`,
    details: ``,
    price: "8500.00",
    stars: "4",
    producImg: "/imgs/xylophone.jpg",
    category: "Matériels Pédagogique",
  },
  {
    id: 35,
    productName: "Puzzle Alphabet Majuscule ",
    description: "En bois (26 pièces)",
    longDescription: `En bois, avec un logement séparé pour chaque lettre majuscule. `,
    details: `-	Socle en bois naturel clair 
    -	Pièces en bois colorées de 4 couleurs différentes, chacune correspond à une lettre en majuscule.
    -	Une petite tige en bois est collée sur chacune des lettres afin de féliciter son extraction du socle.
    -	Dimension : 22.2 x 29.6 cm
    `,
    price: "2800.00",
    stars: "4",
    producImg: "/imgs/pzzulemaj.png",
    category: "Matériels Pédagogique",
  },
  {
    id: 36,
    productName: "Loupe Réglette",
    description: "avec ligne de repère rouge X2",
    longDescription: `Cette règle loupe de lecture avec un grossissement de 2x est parfaitement adaptée à la lecture d'un livre, de votre magazine, de votre journal et plus particulièrement pour les larges tableaux.
    Grâce à sa ligne de guidage rouge, la lecture se fait de manière plus agréable et prolongée sans fatigue.
    `,
    details: `La règle-loupe grossit uniquement dans un sens : les lettres sont allongées dans le sens de la hauteur, tandis que leur largeur reste inchangée.


    -	Lentille rectangulaire
    -	Matériau : PXM Plastique très léger et incassable
    -	Grossissement : x2
    -	Avec poignée pour la préhension
    -	Avec ligne repère rouge pour un meilleur suivi
    -	Dimensions (longueur x largeur x épaisseur) : 173 x 25 x 13 mm
    -	Poids : 43 g
    
    `,
    price: "4000.00",
    stars: "4",
    producImg: "/imgs/loup.png",
    category: "Matériels Pédagogique",
  },
  {
    id: 37,
    productName: "Cube Algébriques Par 100",
    description: "Chaque cube se compose de trois carrés mobiles en plastique",
    longDescription: `Chaque cube se compose de trois carrés mobiles en plastique, pivotant autour d'un axe central métallique. Sur chacun des côtés de ces carrés est représentée l'une des 4 possibilités de positionnement des points braille (1 point à gauche, 1 point à droite, 2 points ou rien), ce qui permet de former les 63 caractères braille.`,
    details: `•	Conditionnés par boîte de 100 cubes
    •	Dimensions d'un cube : 9 mm de côté
    •	Poids de l'ensemble : 170 
    
    `,
    price: "24 000.00",
    stars: "4",
    producImg: "/imgs/cubalg.png",
    category: "Matériels Pédagogique",
  },
  {
    id: 38,
    productName: "Tablette à Cuvettes ",
    description: "27 lignes x 30 caractères",
    longDescription: `C-	Lignes paires du cadre numérotées en braille
    -	Aux extrémités des lignes 9 et 19, fentes prévues pour le passage de rubans adhésifs de 9 et 12 mm.
    -	Ouverture par charnière latérale à gauche.
    -	Partie gauche de la tablette percée de trous correspondant aux perforations standards d'une feuille de format A4 (21 x 29,7 cm) pour insérer la tablette dans un classeur
    -	Dimensions (largeur x longueur x épaisseur) : 22 x 31 x 0,5 cm
    -	Poids : 285 g    
    `,
    details: `
    `,
    price: "5000.00",
    stars: "4",
    producImg: "/imgs/tablette.png",
    category: "Tablette et Accessoires",
  },
  {
    id: 39,
    productName: "Poinçon collerette",
    description:
      "  Sa pointe métallique permet l'embossage d'un point braille sur papier ou support plastifié",
    longDescription: `
    Sa pointe métallique permet l'embossage d'un point braille sur papier ou support plastifié (bande adhésive ou fiche autocollante) par une simple pression de l'utilisateur sur le manche en bois en forme de quille.`,
    details: `
    `,
    price: "714.00",
    stars: "4",
    producImg: "/imgs/poincon.jpg",
    category: "Tablette et Accessoires",
  },
  {
    id: 40,
    productName: "Efface points ",
    description:
      " Accessoire en bois permettant d'effacer soit un point grâce à son extrémité fine",
    longDescription: `
    Accessoire en bois permettant d'effacer soit un point grâce à son extrémité fine, soit un ou plusieurs caractères en utilisant son extrémité plate.`,
    details: `
    -	Longueur : 7,8 cm
-	Diamètre de la partie la plus large : 2,1 cm
-	Diamètre de la partie la plus fine : 0,15 cm
-	Poids : 15 g

    `,
    price: "-",
    stars: "4",
    producImg: "/imgs/effacepoints.jpg",
    category: "Tablette et Accessoires",
  },
  {
    id: 41,
    productName: "Tablette",
    description: "24 lignes x 23 caractères",
    longDescription: `
    Cette tablette en plastique, pour écriture braille sur papier épais. Grammage conseillé : entre 120 et 180 g, permet l'écriture en inter point.`,
    details: `
    -	Ouverture par charnière horizontale en haut
-	Réglette de 2 lignes, remplaçable, que l'on déplace au fur et à mesure de l'écriture, avec 1 point toutes les 5 cases.
-	Cases du cadre munies chacune de 6 encoches facilitant l'écriture avec le poinçon
-	Fentes prévues aux extrémités des lignes 9 et 17 pour le passage de rubans adhésifs de 9 et 12 mm.
-	Dimensions (largeur x longueur x épaisseur) : 19 x 30 x 0,5 cm
-	Poids : 285 g

    `,
    price: "-",
    stars: "4",
    producImg: "/imgs/tablette2.png",
    category: "Tablette et Accessoires",
  },
];

export default ProductsData;
