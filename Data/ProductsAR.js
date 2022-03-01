const ProductsData = [
  {
    id: 0,
    productName: "Calculatrice Parlante",
    description: "VarioUltra هي مفكرة بطريقة برايل من صنع Baum",
    longDescription:
      "هذه الآلة الحاسبة المجهزة بأحرف كبيرة ووظيفة صوتية ، بتصميم حديث وأنيق ، ستتيح لك إجراء العمليات والنسب المئوية الأساسية الأربع. ستعمل أيضًا كساعة مع إعلان صوتي وساعة منبه بفضل وظيفة التنبيه.",
    details: `- شاشة عرض بلورية سائلة مرتفعة قليلاً (10 أرقام بارتفاع 21 مم لكل منها)
      - مفاتيح الذاكرة: زائد ، ناقص ، استدعاء ، حذف (تُستخدم هذه أيضًا لإعدادات التاريخ ،
         الوقت والتنبيه)
      - إمكانية نطق الأرقام عالميًا أو رقميًا
      - القدرة على تعطيل تركيب الصوت
      - التحكم في مستوى الصوت: نعم (على مستويين)
      - زر كرر
      - إعلان الوقت: نعم
      - إعلان التاريخ: لا ، سيتم عرضه وتعيينه فقط ولكن لن يتم الإعلان عنه مطلقًا
      - وظيفة التنبيه مع المنبه عن طريق التنبيه وإعلان الوقت
        `,
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/calculatriceparlante.png",
    category: "CALCULE",
  },
  {
    id: 1,
    productName: "Cubarithme",
    description:
      "تستخدم هذه الصينية البلاستيكية المكونة من 15 صفًا من 20 مربعًا لتعلم الحساب",
    longDescription: `تُستخدم هذه الصينية البلاستيكية المكونة من 15 صفًا من 20 مربعًا لتعلم الحساب (بمرجع 15001 مكعب) والجبر (بمرجع 15002 مكعب).
      يتيح استخدام المكعبات الجبرية (المرجع 15002) أيضًا تكوين ألغاز الكلمات المتقاطعة`,
    details: `
      - أبعاد الصينية: 19 × 25 سم
      - أبعاد الصندوق: جانب 10 ملم`,
    price: "4500.00",
    stars: "4",
    producImg: "/imgs/CUBARITHME.png",
    category: "CALCULE",
  },
  {
    id: 2,
    productName: "Cubes arithmétiques par 100",
    description: "هذه المكعبات الحسابية البلاستيكية",
    longDescription: `هذه المكعبات الحسابية البلاستيكية ، الموزونة بكرات فولاذية ومعلمة بالحروف البارزة على كل جانب ، تسمح لكتابة أرقام برايل بوضعها على السبورة (المرجع 15000).`,
    details: `
      - معبأة في علب 100 مكعب
      - أبعاد المكعب: ضلع 9 مم
  `,
    price: "12 000.00",
    stars: "4",
    producImg: "/imgs/cubesArith.png",
    category: "CALCULE",
  },
  {
    id: 3,
    productName: "Feuille à dessin A4",
    description: "رزم 600 ورقة",
    longDescription:
      "En plastique transparent, ces feuilles sont utilisées pour la réalisation de dessins à l'aide de la planche référence.",
    details: `
      - معبأة في حوالي 600 ورقة`,
    price: "20 000.00",
    stars: "4",
    producImg: "/imgs/A4.png",
    category: "DESSINS",
  },
  {
    id: 4,
    productName: "Ensemble d’équerres",
    description: "بلاستيك صلب",
    longDescription:
      "في البلاستيك الصلب ، تخرجوا بارتياح على كل جانب من الزاوية اليمنى.",
    details: `
      • المجموعة تشمل:
      - 1 مربع بزاوية 30 درجة و 60 درجة
      - 1 مربع بزاوية 45 درجة
      • مقاييس:
      - 1 نقطة كل نصف سنتيمتر
      - نقطتان كل سنتيمتر
      - 3 نقاط كل 5 سم
      
      • طول الوتر:
      - 16.5 سم للشريحة بزاوية 45 درجة
      - 19 سم للشريحة من 30 درجة إلى 60 درجة
  `,
    price: "5000.00",
    stars: "4",
    producImg: "/imgs/kous.png",
    category: "DESSINS",
  },
  {
    id: 5,
    productName: "Compas à pointe sèche ",
    description: "هذه البوصلة مجهزة بنقطة جافة ",
    longDescription:
      "تم تجهيز هذه البوصلة بنقطة جافة لعمل خطوط إغاثة على الألواح البلاستيكية مراجع 16500 و 16503 وباستخدام مرجع لوحة الرسم 16000 كدعم يمكن استبدال النقطة الجافة بقلم رصاص أو قلم رصاص.",
    details: "",
    price: "14 000.00",
    stars: "4",
    producImg: "/imgs/compa.png",
    category: "DESSINS",
  },
  {
    id: 6,
    productName: "Planche à dessiner 25 x 35 cm",
    description: "مصنوعة من مادة مطاطية غير قابلة للانزلاق",
    longDescription:
      "لوح الرسم هذا مصنوع من مادة مطاطية مانعة للانزلاق ، ويستخدم لعمل خطوط إغاثة على لوح بلاستيكي ، باستخدام قلم أو قلم رسم أو بكرة أو مخرز.",
    details: `
      الحجم (عرض × طول): 24 × 35 سم`,
    price: "5500.00",
    stars: "4",
    producImg: "/imgs/dessinBlanc.jpg",
    category: "DESSINS",
  },
  {
    id: 7,
    productName: "Triple Décimètre en plastique",
    description: "هذه المسطرة البلاستيكية المسطحة متدرجة بشكل بارز",
    longDescription:
      "هذه المسطرة البلاستيكية المسطحة متدرجة بشكل بارز. كما يسمح للأشخاص ضعاف البصر بإيجاد طريقهم بفضل اللونين المتباينين ​​مثل الأصفر والأسود.",
    details: `
      - على جانب واحد من المسطرة:
      - خط صغير كل 5 ملليمترات
      - خط واحد أكبر كل سنتيمتر (كل سنتيمتر بالتناوب أصفر أو أسود)
      - سطر واحد يسير العرض الكامل للمسطرة كل 5 سنتيمترات
      - على الجانب الآخر من الحاكم:
      - درجة واحدة كل 5 ملليمترات
      - خط واحد كل سنتيمتر (كل سنتيمتر بالتناوب أصفر أو أسود)
      - يوجد تحت المسطرة 6 وسادات مانعة للانزلاق
      - العرض: 3.2 سم
      - الوزن: 40 جرام
  `,
    price: "1800.00",
    stars: "4",
    producImg: "/imgs/regle.jpg",
    category: "DESSINS",
  },
  {
    id: 8,
    productName: "Rapporteur",
    description: "بلاستيك صلب",
    longDescription:
      "من البلاستيك الصلب ، هذه المنقلة متدرجة بشكل بارز لتسمح لك بقراءة دقيقة.",
    details: `- 1 نقطة كل 10 درجات
      - 2 نقطة بزاوية 90 درجة
      - الشق يسمح لك بتحديد المركز
      - القطر: 12 سم
      - الوزن: 20 جرام`,
    price: "800.00",
    stars: "4",
    producImg: "/imgs/RAPPORTEUR.png",
    category: "DESSINS",
  },
  {
    id: 9,
    productName: "Roulette à dessiner",
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
    category: "DESSINS",
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
    productName: "Réveil- Calendrier parlant ",
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
    price: "500.00",
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
    price: "500.00",
    stars: "4",
    producImg: "/imgs/smartwatch.png",
    category: "HORLOGERIE",
  },
  {
    id: 14,
    productName: "Réveil parlant de chevet",
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
    price: "500.00",
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
    price: "500.00",
    stars: "4",
    producImg: "/imgs/redball.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 16,
    productName: "BOITE A POIDS",
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
    productName: "BOITE A SON",
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
    producImg: "/imgs/boiteson.jpg",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 18,
    productName: "Jeu de domino en bois Points en relief",
    description: "Pour 2 à 4 joueurs à partir de 6 ans.",
    longDescription: `Le but du jeu est de parvenir le premier à placer tous ses dominos sur la table. Le jeu comprend 28 dominos en bois naturel clair marqués en relief par des points couleur acajou.`,
    details: `الخصائص :
      سلمت في صندوق خشبي أقلام الرصاص.
      أبعاد دومينو (عرض × طول × سماكة): 2.5 × 5 × 1 سم
      أبعاد الصندوق (عرض × طول × سماكة): 14 × 20.7 × 4.5 سم`,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/domino.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 19,
    productName: "Memory Tactile",
    description: "هذه اللعبة التعليمية مخصصة للأطفال من سن 5 سنوات.",
    longDescription: `تتكون اللعبة من 32 قطعة خشبية مستديرة تشكل 16 زوجًا من مواد مختلفة.`,
    details: `باستخدام اللعبة:
      بالنسبة لأصغرهم ، ستكون مسألة الجمع بين أزواج متطابقة.
      يمكن استخدامه أيضًا كلعبة ذاكرة للعب مع الآخرين.`,
    price: "13 500.00",
    stars: "4",
    producImg: "/imgs/tactile.png",
    category: "JEUX EDUCATIFS",
  },
  {
    id: 20,
    productName: "ZOOM Text Logiciel",
    description: "صور واضحة ، سهولة التنقل",
    longDescription: `بفضل برنامج التكبير ZOOMTEXT الذي نشرته AiSquared ، سيكتشف المستخدمون ضعاف البصر مفهومًا جديدًا للتكبير وقراءة الشاشة: يصبح الوصول إلى المستندات وجداول البيانات وصفحات الويب والبريد أسرع وأسهل وأكثر دقة من أي وقت مضى.
  
      ZOOMTEXT MAGNIFIER: صور واضحة ، تنقل سهل ، سهولة في الاستخدام لا تضاهى وأعلى مستوى من التوافق.`,
    details: `خصائص تقنية :
  
      - تكبير مرن: يتيح لك التكبير من 1 إلى 36 مرة و 8 نوافذ تكبير مختلفة تكوين العرض المكبر وفقًا لاحتياجاتك.
      - تعمل تقنية "xFont" الجديدة على تحسين جودة عرض النص. يمكن قراءة معظم الخطوط الرسومية تمامًا ، بغض النظر عن نسبة التكبير المستخدمة.
      - تحسين اللون: تعمل أدوات التحكم المبتكرة في إدارة الألوان على زيادة وضوح الشاشة وتقليل إجهاد العين. تتضمن التأثيرات الخاصة خيارات ملونة ولونين وخيارات أخرى لتجاوز الألوان المزعجة.
      - رؤية المؤشرات والمؤشرات: من الممكن تغيير لون وحجم مؤشر الماوس لعرضه بسهولة أكبر. من
      - تعمل محددات المواقع الخاصة أيضًا على تسهيل اكتشاف مؤشر النص وسهولة متابعته.
      - تعريف مناطق القراءة: باستخدام اختصار لوحة مفاتيح بسيط ، يتم وضع التكبير في حقول لم يحددها المستخدم.
      - وظيفة البحث عن النص الجديدة تحدد بسرعة الكلمة أو العبارة التي تم إدخالها في التطبيق.
      - حفظ "ملفات التعريف" يحفظ إعدادات العرض المحددة لكل تطبيق.     
  `,
    price: "189 350.00",
    stars: "4",
    producImg: "/imgs/zoomtext.png",
    category: "LOGICILE",
  },
  {
    id: 21,
    productName: "Logiciel JAWS pour Windows FR/AR",
    description: "JAWS (الوصول إلى الوظيفة بالكلام)",
    longDescription: `برنامج مراجعة شاشة للمكفوفين نشرته شركة Freedom Scientific.
  
      يوفر برنامج قارئ الشاشة JAWS وصولاً صوتيًا كاملاً إلى بيئة Windows وتطبيقات البرامج القياسية والمخصصة.`,
    details: `يوفر برنامج قارئ الشاشة JAWS وصولاً صوتيًا كاملاً إلى بيئة Windows وتطبيقات البرامج القياسية والمخصصة. يمكن توصيل شاشة برايل للقراءة بطريقة برايل.
  
      بالتوافق مع واجهة Windows ، لا يقوم قارئ الشاشة JAWS بإعادة تعريف هيكلها ويجعلك تفهم هذه البيئة بنفس الطريقة التي يفهمها الشخص المبصر ، مما يسهل التكامل بشكل كبير.
      
      يتفاعل JAWS مع المستخدم من خلال الاستفادة الكاملة من العديد من اختصارات لوحة المفاتيح المتوفرة كمعيار ضمن Windows ولا يتعارض مع المفاتيح التي تستخدمها التطبيقات الأخرى. قوي جدا وسهل الاستخدام.
      
      يحتوي JAWS على ميزات لم تتم رؤيتها من قبل:
      
      - وظائف القراءة المجمعة على لوحة المفاتيح الرقمية سهلة الوصول إليها للغاية.
      - 4 مؤشرات للاختيار من بينها لسهولة التنقل.
      - تكوين "حسب الطلب".
      - مرونة كبيرة.
      - مُلصق رسومات يدوي أو آلي.
      - زيادة التحسين لتصفح الإنترنت.
      - محرر نصوص ولغته المتكاملة.
      - دعم العديد من مُركِّبات الكلام ومحطات برايل.
      - تركيب الكلام Acapela infovox SAPI5 فرنسي ، عربي.`,
    price: "348 000.00",
    stars: "4",
    producImg: "/imgs/JAWS.png",
    category: "LOGICILE",
  },
  {
    id: 22,
    productName: "DBT 11.2",
    description: "مترجم دوكسبيري بريل",
    longDescription: `DBT Win هو برنامج يسمح بالنسخ بطريقة برايل الكاملة أو المختصرة للنصوص التي تم إدخالها "باللون الأسود". يستخدمه غالبية منتجي طريقة برايل في جميع أنحاء العالم.`,
    details: `- وضعان متاحان لإدخال النص: لوحة مفاتيح QWERTY أو لوحة مفاتيح Perkins برايل.
      - طباعة متكاملة تسمح بالحصول على طريقة برايل باللون الأسود تحت الأحرف المطبوعة.
      - النسخ الكامل أو المختصر بطريقة برايل لما يقرب من أربعين لغة مختلفة (بما في ذلك العربية) ، مع أو بدون الواصلة.
      - ترقيم تلقائي للصفحات مع إمكانية ترقيم الصفحات مرتين.
      - استيراد الملفات التي تم إدخالها في برامج معالجة الكلمات الشائعة (Microsoft Word و WordPerfect وما إلى ذلك) ، أو الملفات بتنسيق HTML أو ICADD أو ASCII بتنسيق أو بدون تنسيق ، أو الملفات التي تم إنشاؤها باستخدام محررات برايل القديمة (EDGAR ، Polkadot ، إلخ) أو من الإصدارات الأقدم دوكسبري ، إلخ.
      - الاستيراد من WORD: معالجة جميع حروف العلة المحركة ، والأحرف الخاصة ، والقوائم ذات الرموز النقطية والأرقام ، وتكوين المستورد.  
  `,
    price: "185 000.00",
    stars: "4",
    producImg: "/imgs/DBT.jpg",
    category: "LOGICILE",
  },
  {
    id: 23,
    productName: "DBT 11.2",
    description: "مترجم دوكسبيري بريل",
    longDescription: `DBT Win هو برنامج يسمح بالنسخ بطريقة برايل الكاملة أو المختصرة للنصوص التي تم إدخالها "باللون الأسود". يستخدمه غالبية منتجي طريقة برايل في جميع أنحاء العالم. `,
    details: `- وضعان متاحان لإدخال النص: لوحة مفاتيح QWERTY أو لوحة مفاتيح Perkins برايل.
      - طباعة متكاملة تسمح بالحصول على طريقة برايل باللون الأسود تحت الأحرف المطبوعة.
      - النسخ الكامل أو المختصر بطريقة برايل لما يقرب من أربعين لغة مختلفة (بما في ذلك العربية) ، مع أو بدون الواصلة.
      - ترقيم تلقائي للصفحات مع إمكانية ترقيم الصفحات مرتين.
      - استيراد الملفات التي تم إدخالها في برامج معالجة النصوص الشائعة (Microsoft Word و WordPerfect وما إلى ذلك) ، أو الملفات بتنسيق HTML أو ICADD أو ASCII بتنسيق أو بدون تنسيق ، أو الملفات التي تم إنشاؤها باستخدام محررات برايل القديمة (EDGAR ، Polkadot ، إلخ) أو من الإصدارات الأقدم دوكسبري ، إلخ.
      - الاستيراد من WORD: معالجة جميع حروف العلة المحركة ، والأحرف الخاصة ، والقوائم ذات الرموز النقطية والأرقام ، وتكوين المستورد.`,
    price: "185 000.00",
    stars: "4",
    producImg: "/imgs/perkins.png",
    category: "Machine à écrire",
  },
  {
    id: 24,
    productName: "Papier non perforé ",
    description: "تنسيق A4 160 G - 250 ورقة",
    longDescription: `يوصى بهذه الورقة لكتابة المستندات للاحتفاظ بها. يمكن استخدامه مع الكمبيوتر اللوحي بتنسيق A3 أو مع الآلة الكاتبة بطريقة برايل أو مع طابعات برايل التي تقبل ورقة تلو الأخرى.`,
    details: `- الحجم: 42 × 29.7 سم ، غير مثقوب
      - الوزن: 160 جرام
      - مغلف بـ 250 ورقة
      - الوزن: 25 كجم
  `,
    price: "2150.00",
    stars: "4",
    producImg: "/imgs/papier.jpg",
    category: "Machine à écrire",
  },
  {
    id: 25,
    productName: "Machine PERKINS Uni-manuelle",
    description: "آلة كاتبة بطريقة برايل ميكانيكية ومحمولة.",
    longDescription: `نفس الخصائص التي تشير إليها آلة Perkins تشير إلى 11000 ، ولكن مع السماح بالكتابة بيد واحدة ، فإن ضغطتين متتاليتين على المفاتيح ضرورية لكتابة حرف.`,
    details: `-	لون رمادي
      - الأبعاد (عرض × طول × ارتفاع): 15 × 23 × 39 سم
      - الوزن: 4.8 كجم`,
    price: "196 000.00",
    stars: "4",
    producImg: "/imgs/mperkins.png",
    category: "Machine à écrire",
  },
  {
    id: 26,
    productName: "Papier listing",
    description: "170 جرام - 250 ورقة",
    longDescription: `سيتم استخدام هذا الورق مع طابعة برايل تتطلب هذا النوع من الورق لإصدار المستندات المستمرة.`,
    details: `- التنسيق: 12 بوصة (24 ثقبًا على جانبي الورقة على شرائط كارول)
      - التعبئة: 250 ورقة
      - الوزن: 170 جرام
      - الأبعاد باستثناء شرائط كارول: 21 × 30.5 سم
      - الأبعاد مع شرائط كارول: 24 × 30.5 سم
      - شريط كارول الأيمن والأيسر القابل للفصل
      - الوزن: 3.3 كجم`,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/papers.jpg",
    category: "Machine à écrire",
  },
  {
    id: 27,
    productName: "Feuille pour thermoformage A4",
    description: "رزم 200 ورقة",
    longDescription: `تستخدم هذه الأوراق مع المشكل الحراري. سيتم استخدام هذا الورق مع طابعة برايل تتطلب هذا النوع من الورق لإصدار المستندات المستمرة.`,
    details: `• السماكة: ناعم 0.12 مم
      • حجم الورقة: 21 × 29.7 (A4)
      •	لون أبيض
      • التعبئة: 100 ورقة
      • الوزن: حوالي 1 كجم   
  `,
    price: "88 000.00",
    stars: "4",
    producImg: "/imgs/four.png",
    category: "Machine à écrire",
  },
  {
    id: 28,
    productName: "INDEX EVREST DV5",
    description: "طابعة برايل من ورقة إلى ورقة: طباعة سريعة لجميع التنسيقات.",
    longDescription: `تعد طابعة Index Evrest D-V5 هي أحدث إصدار من طابعات INDEX Braille الشهيرة ، والمعروفة بجودتها ودقة نقاطها بطريقة برايل.
      إنها آلة نقش برايل على الوجهين مزودة بوحدة تغذية للورق.
      أصبح النقش ممكنًا الآن أفقيًا وعموديًا.`,
    details: `يمكن لـ Evrest -D V5 أن تنقش نصوص برايل وعناصر رسومية على أوراق مفردة ، وكتب (تنسيق كتيب تلقائي) ، وملصقات وبطاقات عمل.
      إنه المزخرف الأكثر تنوعًا في السوق.
      
      عملي جدًا ، يمكن إجراء النقش من هاتف ذكي أو جهاز لوحي بالإضافة إلى التكوين ، وهو أمر جاد مع البرنامج المجاني Indexa IdB.
      
      
      تحسين النماذج السابقة:
  
      - سرعة طباعة أسرع واستهلاك أقل للطاقة.
      - التوافق مع الأجهزة المحمولة.
      - برنامج IDB من الفهرس.
      - الرسائل الصوتية التي يصدرها الصوت الاصطناعي Acapela.
      - منفذ USB للطباعة المباشرة من مفتاح USB للنسخ الاحتياطي.
      - خفض الوزن إلى 12 كجم.
      
      أحدث الميزات
      Wifi - USB - التوصيل بالأجهزة المحمولة.
      
      الخصائص
      - نقش ورقة على ورقة
      - سرعة طباعة 400 صفحة A4 في الساعة
      - دقة تصل إلى 100 نقطة في البوصة ومسافات قابلة للتعديل
      - وزن الورق من 120 إلى 180 جرام
      - عرض الصفحة من 13 سم إلى 29.7 سم
      - طول الصفحة من 10 سم الى 59 سم
      - وحدة تغذية بالورق سعة 50 صفحة
      - طباعة 6 أو 8 نقاط
      - ما يصل إلى 48 حرفًا في كل سطر
      - تحويل النص إلى كلام للأوامر والقوائم والاختيارات
      - واجهة USB و LAN و Wi-Fi و Bluetooth
      - متوافق مع الهواتف الذكية والأجهزة اللوحية
      - برامج تشغيل لويندوز وماك ولينكس
      - واجهة ويب للإعدادات والحالة
      - الأبعاد: L56xH45xD18 سم
      - الوزن: 12 كجم
      - الضوضاء: أقل من 60 ديسيبل مع صندوق عازل للصوت
      - الاستهلاك: 140 واط في الطباعة و 5 واط في وضع الاستعداد
         
  `,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/info2.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 29,
    productName: "Imprimante Braille INDEX Braille BOX V5",
    description: "طابعة برايل بوكس ​​، من إنتاج شركة إندكس",
    longDescription: `طابعة برايل بوكس ​​، التي تصنعها شركة إندكس ، عبارة عن مزخرف R / V مخصص لطباعة الكتب بطريقة برايل ، وهي تنتج الأعمال مباشرة (كتب ، صحف) بتنسيق دفتر ملاحظات "جاهز للربط". `,
    details: `الخصائص
      - سرعة عالية: 800 صفحة في الساعة.
      - جودة نقاط برايل ممتازة
      - يمكن لدرج الإدخال أن يستوعب حتى 400 صفحة.
      - تغذية ورقة مستقرة للغاية.
      - مستوى ضوضاء منخفض مذهل.
      - تغذية A3 مطوية بحجم A4 نهائي.
      
      كميات إنتاج عالية:
      يعتبر صندوق برايل أفضل مزخرف لإنتاج كميات كبيرة من لغة بريل باستخدام ورق نسخ عادي. كما أن لديها أفضل وضع للطاقة تم استخدامه على الإطلاق في طابعة برايل.
      تعد Braille Box إحدى قصص نجاح INDEX Braille ، حيث تمنح المستخدمين ما يطلبونه في الطباعة بكميات كبيرة  
  `,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/info5.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 30,
    productName: "Imprimante braille Basic-D V5",
    description:
      "L’imprimante-embosseuse braille Basic-D est fabriquée par INDEX Braille.",
    longDescription: `L’imprimante-embosseuse braille Basic-D est fabriquée par INDEX Braille.
  
      Best-seller depuis des années, l'embosseuse Basic- D utilise du papier tracté pour produire du braille de qualité en recto ou recto/verso.
      `,
    details: `- حجم مضغوط.
      - 100 حرف في الثانية.
      - الطباعة من الأجهزة المحمولة.
      - لوحة تحكم باللون الأسود وبرايل.
      - جرار التغذية الذاتية: أكثر طرق تغذية الورق موثوقية.
      - خبرة 25 سنة 
  `,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/info1.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 31,
    productName: "Imprimante Embosseuse Braille Indexa Evrest D-V4",
    description: "Evrest D-V4",
    longDescription: `INDEX EVREST هو مزخرف R / V مزود بوحدة تغذية للورق سرعتها 100 حرف في الثانية.
      يتميز EVREST بمستوى ضوضاء منخفض جدًا لا يتطلب غطاء عازل للصوت ونقاط برايل عالية الجودة واختيار المعلمات التي يتم التحكم فيها بواسطة شاشة رقمية. `,
    details: `الحكم الذاتي ، نعم
      تحويل النص إلى كلام - نعم
      مفاتيح التنقل - نعم
      نوع لوحة المفاتيح (للكتابة) - لا
      قارئ بطاقة الذاكرة - لا
      اتصال بلوتوث - لا
      اتصال RS232
      اتصال USB ، نعم    
  `,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/info6.png",
    category: "MATERIEL INFORMATIQUE",
  },
  {
    id: 32,
    productName: "PUZZLE Géométrique en bois",
    description: "لعبة تعليمية للأطفال من سن 3 سنوات.",
    longDescription: `لعبة تعليمية للأطفال من سن 3 سنوات.`,
    details: `الهدف من اللعبة:
  
      رتب القطع حسب الشكل الهندسي ، تتكون هذه اللعبة من 40 ، 44 قطعة هندسية ملونة. يتم تضمين النماذج في صينية مستطيلة.`,
    price: "6500.00",
    stars: "4",
    producImg: "/imgs/PUZZLE.jpg",
    category: "Matériels Pédagogique",
  },
  {
    id: 33,
    productName: "PUZZLE Chiffres",
    description: "خشبي (10 قطع)",
    longDescription: `مصنوع من الخشب وبه غلاف منفصل لكل رقم`,
    details: ` - قاعدة خشبية طبيعية فاتحة
      - قطع خشبية ملونة بستة ألوان مختلفة.
      - الأبعاد: 22.2 × 29.6 سم`,
    price: "500.00",
    stars: "4",
    producImg: "/imgs/puzzleChiffres.jpg",
    category: "Matériels Pédagogique",
  },

  {
    id: 34,
    productName: "Xylophone pour enfant",
    description: "ريش فولاذية بألوان مختلفة وأطوال مختلفة",
    longDescription: `يتكون إكسيليفون من شفرات فولاذية ذات ألوان مختلفة وأطوال مختلفة مثبتة على دعامة خشبية ، والتي يتم ضربها بواسطة مطرقة تنتهي في كرة. ترتيب القصب مشابه لترتيب لوحة مفاتيح البيانو.`,
    details: ``,
    price: "8500.00",
    stars: "4",
    producImg: "/imgs/xylophone.jpg",
    category: "Matériels Pédagogique",
  },
  {
    id: 35,
    productName: "PUZZLE Alphabet Majuscule ",
    description: "خشبي (26 قطعة)",
    longDescription: `مصنوع من الخشب مع فتحة منفصلة لكل حرف كبير.`,
    details: `- قاعدة خشبية طبيعية فاتحة
      - قطع خشبية ملونة بأربعة ألوان مختلفة يتطابق كل منها مع حرف كبير.
      - تم لصق قضيب خشبي صغير على كل حرف للتهنئة باستخراجها من القاعدة.
      - الأبعاد: 22.2 × 29.6 سم
      `,
    price: "2800.00",
    stars: "4",
    producImg: "/imgs/pzzulemaj.png",
    category: "Matériels Pédagogique",
  },
  {
    id: 36,
    productName: "Loupe réglette",
    description: "مع خط المتصدر الأحمر X2",
    longDescription: `هذه المسطرة المكبرة للقراءة بتكبير 2x مناسبة تمامًا لقراءة كتاب ومجلة وصحيفتك وخاصة للوحات الكبيرة.
      بفضل خطها الإرشادي الأحمر ، تصبح القراءة أكثر متعة وتستغرق وقتًا طويلاً دون تعب.`,
    details: `تنمو المسطرة المكبرة في اتجاه واحد فقط: يتم استطالة الأحرف في اتجاه الارتفاع ، بينما يظل عرضها دون تغيير.
  
  
      - عدسة مستطيلة
      - المادة: بلاستيك PXM خفيف جدا وغير قابل للكسر
      - التكبير: x2
      - مع مقبض للإمساك
      - مع خط توجيه أحمر لتتبع أفضل
      - الأبعاد (الطول × العرض × السمك): 173 × 25 × 13 ملم
      - الوزن: 43 جرام
      `,
    price: "4000.00",
    stars: "4",
    producImg: "/imgs/loup.jpg",
    category: "Matériels Pédagogique",
  },
  {
    id: 37,
    productName: "Cube Algébriques par 100",
    description: "يتكون كل مكعب من ثلاث مربعات بلاستيكية متحركة",
    longDescription: `يتكون كل مكعب من ثلاث مربعات بلاستيكية متحركة تدور حول محور معدني مركزي. يوجد على كل جانب من هذه المربعات أحد الاحتمالات الأربعة لوضع نقاط برايل (نقطة واحدة على اليسار ، نقطة واحدة على اليمين ، نقطتان أو لا شيء) ، مما يجعل من الممكن تشكيل 63 حرفًا بطريقة برايل.`,
    details: `• معبأة في صناديق من 100 مكعب
      • أبعاد المكعب: 9 مم ضلع
      • الوزن الإجمالي: 170
      `,
    price: "24 000.00",
    stars: "4",
    producImg: "/imgs/cubalg.jpg",
    category: "Matériels Pédagogique",
  },
  {
    id: 38,
    productName: "Tablette à cuvettes ",
    description: "27 lignes x 30 caractères",
    longDescription: `ج- الأسطر الزوجية للإطار مرقمة بطريقة برايل
      - في نهايات الخطين 9 و 19 ، يتم توفير فتحات لمرور شريط لاصق 9 و 12 مم.
      - تفتح بمفصلة جانبية على اليسار.
      - الجزء الأيسر من الجهاز اللوحي مثقوب بفتحات مطابقة للثقوب القياسية لورقة A4 (21 × 29.7 سم) لإدخال الجهاز اللوحي في غلاف
      - الأبعاد (عرض × طول × سماكة): 22 × 31 × 0.5 سم
      - الوزن: 285 جرام  
      `,
    details: `
      `,
    price: "5000.00",
    stars: "4",
    producImg: "/imgs/tablette.jpg",
    category: "Tablette et Accessoires",
  },
  {
    id: 39,
    productName: "Poinçon collerette",
    description:
      " يسمح طرفه المعدني بنقش نقطة برايل على الورق أو دعامة مغطاة بالبلاستيك",
    longDescription: `يسمح طرفه المعدني بنقش نقطة برايل على الورق أو دعامة مغطاة بالبلاستيك (شريط لاصق أو ورقة ذاتية اللصق) بمجرد الضغط على المستخدم على المقبض الخشبي على شكل دبوس البولينج.details:
      `,
    price: "714.00",
    stars: "4",
    producImg: "/imgs/poincon.jpg",
    category: "Tablette et Accessoires",
  },
];

export default ProductsData;
