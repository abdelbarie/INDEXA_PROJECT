const Centres = [
  {
    id: 1,
    centerName: "CENTRE AUDITIF MOHAMMADIA - ALGER",
    description:
      "Centre Commercial et d’Affaire Mohammadia Mall, N°935, RDC. Cité djénina, Mohammadia",
    phoneNumber: ["023 804 497","023 804 498"] , 
    wilaya : 'ALGER' , 
    location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102319.30953720413!2d3.012907869645209!3d36.7350858992618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3f6e0666141%3A0x4e7ae433da574068!2sCENTRE%20INDEXA%20PHONAK%20EL%20MOURADIA!5e0!3m2!1sfr!2sit!4v1647445119967!5m2!1sfr!2sit"},
  {
    id: 2,
    centerName: "CENTRE AUDITIF MOURADIA - ALGER",
    description:
      "74 Chemin Abdelkader, El Mouradia, Algérie",
    phoneNumber: ["+213 560 68 66 39", "+213 560 68 66 39"],
    wilaya : 'ALGER' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6394.131737213237!2d3.057341!3d36.74499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e7ae433da574068!2sCENTRE%20INDEXA%20PHONAK%20EL%20MOURADIA!5e0!3m2!1sfr!2sus!4v1647444369363!5m2!1sfr!2sus" 
  },
  {
    id: 3,
    centerName: "CENTRE AUDITIF BAB EZZOUAR - ALGER",
    description:
      "03, Cité douzi, Lot N°459 – Bab Ezzouar",
    phoneNumber: [],
    wilaya : 'ALGER' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6395.209977920512!2d3.184584!3d36.732047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e51a87213faa3%3A0x62589087993d9f8d!2sImprimerie%20Le%20Signe%20-%20Boite%20de%20communication%20babezzouar%20-%20imprimerie%20babezzouar%20-%20Agence%20de%20Publicit%C3%A9%20-%20Babezzouar%20-%20Alger%20-%20Alg%C3%A9rie%20-%20imprimerie%20alger%20-%20boite%20de%20communication%20alger%20-%20agence%20de%20publicit%C3%A9%20babezzaour!5e0!3m2!1sfr!2sus!4v1647444593936!5m2!1sfr!2sus"},
  {
    id: 4,
    centerName: "CENTRE AUDITIF BLIDA",
    description:
      "Boulevard Kritli Mokhtar 9000 Blida",
    phoneNumber: ["+213 5 60 67 57 88" , "+213 5 60 67 99 90" , "+213 5 60 71 05 35"],
    wilaya : 'BLIDA' , 
    location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.0013621623825!2d2.8344532152385495!3d36.48168318001538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c7325290d0b%3A0xf68b92a999cdcc6d!2sAv.%20Kritli%20Mokhtar%2C%20Blida!5e0!3m2!1sfr!2sdz!4v1648819722798!5m2!1sfr!2sdz"},
  {
    id: 5,
    centerName: "CENTRE AUDITIF ORAN",
    description:
      "Zone USTO, Cité Ibn Rochd",
    phoneNumber: ["+213 41 82 10 22" , "+213 560 67 53 28" , "+213 41 82 10 17"],
    wilaya : 'ORAN' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6479.752562760575!2d-0.601304!3d35.704662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e882821eb5ed9%3A0xf170c74fc1a2400a!2sIbn%20Rochd%2C%20Oran%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sus!4v1647444735018!5m2!1sfr!2sus" },
  {
    id: 6,
    centerName: "CENTRE AUDITIF SIDI BEL ABBES",
    description:
      "23, rue Didouche Mourad, 1er étage",
    phoneNumber: ["+213 5 61 74 21 31" , "+213 5 61 73 72 18"],
    wilaya : 'SIDI BEL ABBES' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6521.096455010245!2d-0.633985!3d35.192811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f00366df514a1%3A0xf3e924be9a21e2f3!2s23%20Bd%20Didouche%20Mourad%2C%20Sidi%20Bel%20Abb%C3%A8s%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sus!4v1647444762013!5m2!1sfr!2sus" },
  {
    id: 7,
    centerName: "CENTRE AUDITIF TIZI OUZOU",
    description:
      "Lot N° 13, Bd Krim Belkacem, Tizi Ouzou 15000",
    phoneNumber: ["+213 561 63 07 62" , "+213 561 64 13 90"],
    wilaya : 'TIZI OUZOU' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.232170494082!2d4.0549137!3d36.7031504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd71324214135e83!2sINDEXA%20SOLUTIONS%20AUDITIVES%20TIZI%20OUZOU!5e0!3m2!1sfr!2sdz!4v1648819898006!5m2!1sfr!2sdz"},
  {
    id: 8,
    centerName: "CENTRE AUDITIF SETIF",
    description:
      "N°187, Cité 1er Novembre 54",
    phoneNumber: ["+213 5 60 23 42 79" , "+213 5 60 14 67 95" , "+213 5 60 23 42 79"],
    wilaya : 'SETIF' , 
    location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.8522214790137!2d5.431196615230394!3d36.194475680077794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315ae0937fe95%3A0x51b9233fff9f8344!2sABC%20BANK%20SETIF!5e0!3m2!1sfr!2sdz!4v1648820323600!5m2!1sfr!2sdz"},
  {
    id: 9,
    centerName: "CENTRE AUDITIF CONSTANTINE",
    description:
      "25B, cité El Hayet, Sidi Mabrouk",
    phoneNumber: ["+213 5 60 63 98 65" , "+213 5 60 62 28 54"],
    wilaya : 'CONSTANTINE' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7129.048384537487!2d3.6088877618749007!3d36.20315741829401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1774859343da9%3A0x3521dca5ca7834b8!2sIndexa%20solutions%20auditives!5e0!3m2!1sfr!2sus!4v1647444894035!5m2!1sfr!2sus"},
  {
    id: 10,
    centerName: "CENTRE AUDITIF EL OUED",
    description:
      "Cité Rimal N° 85 Groupement 412 El OueD",
    phoneNumber: ["+213 5 61 66 60 30" , "+213 5 61 69 35 28"],
    wilaya : 'EL OUED' , 
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6665.407088233899!2d6.850417!3d33.352694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ae8593c593a3c08!2zMzPCsDIxJzA5LjciTiA2wrA1MScwMS41IkU!5e0!3m2!1sfr!2sus!4v1647444935545!5m2!1sfr!2sus" },
];

export default Centres;
