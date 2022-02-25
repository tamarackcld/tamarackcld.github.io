/* French Text for Tamarack*/

const basics={
    h1:"Informations sur le Programme",
    organization:"Nom de l’organisation",
    program:"Veuillez décrire votre organisation et son travail",
    name:"Nom(s)",
    date:"Terminée le :",
    facilitate:"Qui a animé ou coanimé la discussion sur l’utilisation de l’outil? (Appellation/titre/rôle)",
    howmany:"Combien de personnes étaient incluses?",
    stakeholders:"quels groupes d’intervenant·e·s représentaient-elles?",
    inperson:"S’agissait-il d’une réunion en ligne ou en personne?",
    howlong:"Combien de temps l’évaluation a-t-elle pris? (minutes)",
    cldyear:"Quand votre organisation a-t-elle adopté une approche du travail dirigée par les citoyen·ne·s ou axée sur les acquis? (année)",
    multiyear:"Votre initiative bénéficie-t-elle d’un financement pluriannuel? (Oui/ Non)",
    save:"Sauvegarder les données",
    stage:"Étape du travail",
    region:"Province où votre organisation travaille",
    level:"Ce programme ou projet fonctionne-t-il au niveau :",
    subhead:"Qui réalise cette évaluation?",
    additional:"Commentaires et réactions supplémentaires",
    residents:"Combien de résident·e·s font partie de votre table de planification?",
    organizations:"Combien d’organisations font partie de votre table de planification?",
    base:"Vous trouvez-vous dans une communauté urbaine, rurale ou les deux?",
    interest:"Vous trouvez-vous dans une communauté urbaine, rurale ou les deux?",
    popsize:"Combien d’habitant·e·s votre communauté compte-t-elle?",
    dcmcp:"Participez-vous régulièrement à la communauté de pratique des membres du volet Renforçant la communauté?",
    coach:"Participez-vous régulièrement à un accompagnement par des expert·e·s avec le personnel de Tamarack (autre que votre chargé·e de programme)? ",
    dcmc:"Participez-vous régulièrement à un accompagnement avec un chargé·e de programme de l’équipe renforçant la communauté?",
    attended:"Avez-vous déjà participé à un événement annuel de l’équipe renforçant la communauté?",
    subscribed:"Êtes-vous abonné·e au bulletin d’informations du volet Renforçant la communauté?"
}
const yn=["Oui","Non"];
const bases=["urbane","ruràle","les deux"];
const interests=["Oui","Non","Peut-être à l’avenir"];
const popsizes=["Moins de 1 000","Entre 1 000 et 29 999","Entre 30 000 et 99 999","100,000 et plus"];

const regions=["Alberta","Colombie britannique","Manitoba","Nouveau-Brunswick",
"Terre-Neuve-et-Labrador","Territoires du nord-ouest","Nouvelle-Écosse",
"Nunavut","Ontario","Île-du-Prince-Édouard","Québec","Saskatchewan","Yukon"];

const levels=["du quartier","de la ville","de la région","de la commune"];
const stages=["Émergence","Lancement de notre initiative","Élaboration de notre plan",
"Mise en œuvre de notre plan","Maintien de notre initiative"]; 

const dimensions=[
"A: Participation, Inclusion, et Voix",
"B: Ressources et Connaissances Locales",
"C: Stratégie de sortie liée à la Durabilité",
"D: Mécanismes de Redevabilité",
"E: Réactivité aux Dynamiques Spécifiques au Contexte",
"F: Collaboration au sein et entre les communautés",
"G: DPC lié aux gouvernements sous-nationaux",
"H: Les Pratiques de Suivi et d'Évaluation qui Soutiennent le DPC",
"I: Inventissement et Intensité de Facilitation"
];
const rubric={
p2:["A1. Le programme DPC assure la participation des groupes exclus",
"Aucune information/information insuffisante pour émettre un jugement",
"Les factors potential d'exclusion (sexe, origine ethnique, âge, situation économique) ne sont pas analysés.",
"Les exécutants/réalisateurs/maîtres d'œuvres ont identifié des factors d'exclusion et incluent les points de vues  des membres à risque d'exclusion de la communauté.",
"Les acteurs de mise en oeuvre du programme renforcent la voix collective dans la communauté de ceux qui sont potentiellement exclus et construisent la solidarité communautaire. Remarque: ils ont une voix et sont entendus mais ne sont pas des décideurs.",
"Ceux qui risquent l'exclusion sont des acteurs centraux dans la prise de décision du programme. Remarque: ils ont une voix, sont entendus, et sont des décideurs."],

p3:[
"A2. Les membres de la communauté décident de ce sur quoi mettre l'accent du programme DPC AVANT sa conception réelle",
"Aucune information/information insuffisante pour émettre un jugement",
"Les membres de la communauté n'ont pas été impliqués dans le processus d'évaluation.",
"Les membres de la communauté ont participé activement au processus d'évaluation, et ont été impliqués dans l'une des activités suivantes: (1) conception du processus (2) collecte de données (3) analyse des données (4) formulation des conclusions.",
"Les membres de la communauté ont participé activement au processus d'évaluation, et ont été impliqués dans deux ou trois des activités suivantes: (1) conception du processus (2) collecte de données (3) analyse des données (4) formulation des conclusions.",
"Les membres de la communauté ont été impliqués dans tous des activités suivantes: (1) conception du processus (2) collecte de données (3) analyse des données (4) formulation des conclusions."],

p4:[
"A3. Les membres de la communauté jouent un rôle actif dans la conception du programme DPC",
"Aucune information/information insuffisante pour émettre un jugement",
"Les membres de la communauté n'ont pas été impliqués dans le processus de conception du projet.",
"La base de la conception du programme provient/découle de certains membres de la communauté (par exemple, les dirigeants ou les représentants, mais pas la participation des membres de la communauté au sens large).",
"La base de la conception du programme découle de vastes processus participatifs communautaires, mais sans tenir compte de la dynamique du pouvoir / des sexes, de la répartition des ressources au sein d'une communauté, des différents niveaux de pauvreté, etc.",
"La base de la conception du programme découle des vastes processus participatifs communautaires qui tiennent compte de la dynamique du pouvoir / des sexes, de la répartition des ressources au sein d'une communauté, des differents niveaux de pauvreté, etc. Ces considérations sont utilisées pour créer une vision et des plans d'action."],

p5:[
"A4. Les membres de la communauté jouent un rôle actif dans la mise en œuvre du programme DPC (y compris l'adaptation)",
"Aucune information/information insuffisante pour émettre un jugement",
"Les membres de la communauté n'ont pas été impliqués dans le processus de mise en œuvre.",
"Certains membres de la communauté (par exemple, les dirigeants ou les éprésentants) sont tenus informés des résultats du programme et des décisions concernant sa mise en œuvre ou son adaptation.",
"Les membres de la communauté et les dirigeants locaux sont informés des performances du programme et peuvent influencer la prise de décision concernant les activités du programme et son adaptation.",
"Les membres de la communauté (y compris ceux qui risquent d'être exclus) et les dirigeants locaux conduisent le processus de prise décision  sur les activités du programme en cours, l'examen des performances du programme et tout besoin d'adaptation."],

p6:[
"A5. Le rythme du programme est déterminé en collaboration avec les communautés et, le cas échéant, avec les bailleurs de fonds.                    ",
"Aucune information/information insuffisante pour émettre un jugement",
"Le rythme du programme est détérminé par l'organisation / le bailleur de fonds chargé de sa mise en œuvre, sans consultation de la communauté ni diffusion d'informations.",
"Le rythme du programme est détérminé par l'agence de financement / de mise en oeuvre. La communauté est informée du rhythme et les réactions de la communauté sont obtenues (mais ne sont pas prises en compte).",
"Le rythme du programme est détérminé par l'agence d'exécution ou de financement en collaboration / en consultation avec les membres de la communauté.",
"Le rythme du programme est détérminé en collaboration avec les membres de la communauté, y compris les représentants des groupes marginalisés. Il tient compte des différents rythmes préférés par les différents groupes de la communauté."],

p7:[
"A6 Le programme DPC renforce systématiquement la voix et la confiance des membres de la communauté, en particulier ceux qui risquent d'être exclus afin qu'ils puissent exprimer leur pensées, leurs idées, partager leurs expériences, etc.",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme ne fait aucun effort pour renforcer la voix et la confiance.",
"Le programme peut renforcer la voix et la confiance de certains membres de la communauté et/ou des dirigeants locaux mais n'a pas d'approche systématique pour le faire.",
"Le programme renforce intentionnellement la voix et la confiance des membres de la communauté et / ou des dirigeants locaux par le biais du renforcement des capacités et du mentorat.",
"Le programme renforce intentionnellement la voix et la confiance des dirigeants locaux et des membres des communautés, y compris ceux qui risquent d'être marginalisés (en leur permettant d'apprendre, de s'exercer à articuler et à présenter des idées, entre autres)."],

p8:[
"A7 Le programme DPC sensibilise et renforce les compétences de plaidoyer parmi les structures locales, les dirigeants, et les membres de la communauté, pour qu'ils puissent faire pression en faveur de leurs droits sociaux, économiques et politiques",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme ne sensibilise pas aux droits sociaux, économiques et politiques des personnes et ne renforce pas les capacités de plaidoyer.",
"Le programme sensibilise aux droits sociaux, économiques et politiques des personnes, mais ne développe pas de compétences de plaidoyer.",
"Le programme sensibilise aux droits sociaux, économiques et politiques des personnes et renforce les compétences de plaidoyer.",
"Le programme sensibilise aux droits sociaux, économiques et politiques des personnes et renforce les compétences de plaidoyer et de mouvement social."],

p9:[
"B1 Le programme DPC s'appuie sur les ressources et connaissances locales",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme ne tient pas compte des ressources et des connaissances locales.",
"Le programme est conscient des resources locales, mais les connaissances sont transmises par le personnel de première ligne.",
"Le programme s'appuie sur les ressources locales et tient compte des connaissances locales.",
"Le programme utilise et célèbre les ressources et connaissances locales. *célébrer fait référence à la reconnaissance de la valeur des connaissances locales et à leur mise en œuvre."],

p10:[
"B2 La communauté apporte ses ressources (par exemple, temps, argent, travail, terre, materiaux, etc.)",
"Aucune information/information insuffisante pour émettre un jugement",
"La communauté ne contribue pas à la mise en œuvre du programme ni en espèces, ni en nature, ni en travail.",
"Les membres de la communauté contribue en temps / en travail ou en ressources (terre, argent, materiaux), mais que parce que c'est obligatoire.",
"Les membres de la communauté contribuent en temps / travail ou en ressources (terre, argent materiaux), lorsqu'on le leur demande, mais ne l'offrent pas bénévolement.",
"Les membres de la communauté decident de ce qui est nécessaire, identifient volontiers les ressources supplémentaires qui pourraient contribuer aux résultats (temps / travail, terre, argent, matériaux) et les offrent bénévolement."],

p11:[
"C1 Les communautés sont au cœeur de l'élaboration de stratégies de sortie pour le programme DPC",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de stratégie de sortie.",
"La stratégie de sortie est créée par l'organisme de mise en œuvre sans consultation des dirigeants ou des membres de la communauté.",
"La stratégie de sortie a été créée en consultation avec les dirigeants locaux et les membres de la communauté.",
" Les membres de la communauté et les dirigeants locaux s'approprient la stratégie de sortie."],

p12:[
"C2 La planification d'une sortie responsable est intégrée dans le programme DPC [toutes les phases du cycle de vie]",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de stratégies de sortie.",
"Les stratégies de sortie sont formulées en fonction de la fin du programme la fin du programme (très proche de la clôture où à la clôture).",
"Les stratégies de sortie sont planifiées dès la conception, et réexaminées vers la fin du programme (très proche de la clôture où à la clôture).",
"La planification des stratégies de sortie commence dès la conception, est révisée de manière itérative pendant la mise en œuvre, et est finalisée vers la fin du programme."],

p13:[
"C3 Les stratégies de sortie du programme DPC décrivent les mécanismes laissés en place pour assurer la durabilité et / ou la résilience",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de stratégies de sortie.",
"Il existe une stratègie de sortie, mais elle n'indique pas de  mècanismes de durabilité ou de résilience.",
"Il existe un plan logique qui décrit les mécanismes par lesquels l'impact souhaité se poursuivra après la fin de l'intervention.",
"Il existe un plan logique qui décrit les mécanismes par lesquels l'impact détérminé par les membres de la communauté se poursuivra après la fin de l'intervention. Cela inclut l'évaluation des capacités / ressources nécessaires aux acteurs locaux."],

p14:[
"C4 L'impact du programme DPC est mesuré après la clôture du programme avec la participation locale.",
"Ne s'applique pas",
"L'impact du programme n'est pas planifié ni mesuré 2 ans ou plus après la clôture.",
"L'impact du programme est mesuré  (ou prévu d'être mesuré) 2 ans et plus après la clôture du programme. Les acteurs communautaires sont informés de l'exercice et fournissent les informations demandées.",
"L'impact du programme est mesuré 2 ans et plus après la clôture du programme. Les acteurs communautaires sont consultés au sujet de l'exercice et fournissent les informations demandées.",
"L'impact du programme est mesuré 2 ans et plus après la clôture du programme. Les acteurs communautaires participent activement à toutes les étapes de l'évaluation post-programme (de la conception, au rapport, au plan d'action)."],

p15:[
"C5 Les membres de la communauté (y compris les plus marginalisés) profitent toujours du programme DPC",
"Ne s'applique pas",
"Le programme n'a laissé aucune trace de son impact (positif, négatif, neutre).",
"Il y a peu de preuves d'un impact durable. Il y a eu peu ou pas d'adaptation.",
"L'impact est mitigé mais surtout positif. Les membres et / ou les structures de la communauté ont pratiqué certaines adaptations et compétences acquises grâce au programme DPC.",
"La plupart des preuves sont positives. Les membres et / ou les structures de la communauté ont régulièrement utilisé des mécanismes adaptatifs et des compétences acquises grâce au programme DPC."],

p16:[
"D1 Le programme encourage les partenariats avec une véritable responsabilité mutuelle",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de mécanismes de redevabilité qui impliquent la communauté.",
"Mécanismes de redevabilité existent soit des communautés vers les organismes de mise en œuvre, soit des organismes de mise en œuvres vers les communautés.",
"Des mécanismes de redevabilité à double sens existent entre les communautés et les agences d'exécution .",
"Les mécanismes de responsabilité sont pratiqués non seulement entre les communautés et les organismes d'exécution, mais aussi au sein des communautés elles-mêmes et / ou avec les dirigeants locaux (groupes ou conseils élus)."],

p17:[
"D2 Le programme DPC prévoit des mécanismes de retour d'information aux communautés tout au long du cycle de vie d'un projet, y compris la pratique du suivi et évaluation (S&E)",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de mécanismes de rétroaction.",
"Le retour d'information aux communautés est laissé aux facilitateurs, sans approche systématique.",
"Le retour d'information aux communautés n'est fourni que lorsque des problèmes clés ou enjeus majeurs émergent",
"Sur la base des données de S&E, des exercices d'apprentissage interactifs décentralisés sont utilisés pour fournir un retour d'information aux communautés de manière systématique et pour les aider à élaborer des plans pour traiter les problèmes clés."],

p18:[
"E1 Le programme DPC est sensible aux multiples différences et dynamiques de pouvoir (par exemple, le sexe, le status économique, l'origine ethnique etc.)",
"Aucune information/information insuffisante pour émettre un jugement.",
"Le programme n'évalue ni prend en compte les différences et les dynamiques de pouvoir dans la communauté.",
"Les évaluations de la conception des programmes font apparaître des différences et des dynamiques, mais il n'existe pas de stratégie pour tenir compte de ces différences.",
"L'analyse communautaire met en évidence la variation contextuelle des relations de pouvoir, mais ni le programme ni les animateurs ne sont équipés pour y faire face.",
"Le programme est sensible aux différences de pouvoir et à la dynamique au sein et entre les communautés et les facilitateurs sont équipés préparés pour les aborder."],

p19:[
"E2 Le programme DPC est attentif aux besoins et aux contextes de la communauté",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme ne peut pas repondre aux besoins contextuels de la communauté (le programme applique une approche de type sans modifications ou préétablie)",
"Le programme ne peut pas répondre aux besoins et aux contextes changeants des communautés, mais l'organisme de mise en œuvre cherche d'autres interventions pour y répondre.",
"Le programme peut s'adapter dans une certaine mesure, mais cela se limite aux caractéristiques de conception.",
"Le programme est itératif et capable de peut s'adapter aux crises, aux succès ou aux changements des besoins et des contextes communautaires (par exemple, les inondations, les sécheresses, la faim saisonnière, l'arrivée de nouvelles technologies, les changements de systèmes politiques, etc.)"],

p20:[
"F1 Le programme DPC établit des relations de collaboration horizontales, verticales, et entre les communautés [mesurées comme un indicateur ou décrites comme un processus].",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme ne vise pas à établir des relations de collaboration.",
"Le programme établit des relations de collaboration horizontales (par exemple de pauvre à pauvre, de femme à femme, etc.) au sein de la communauté.",
"Le programme établit des relations de collaboration à la fois horizontales et verticales (de riche à pauvre, de caste à caste, de femme à homme) au sein de la communauté.",
"Le programme établit des relations de collaboration 1. horizontalement (socio-économique, sexe, religion); 2. verticalement (socio-économique, castes); 3. entre les communautés."],

p21:[
"F2 Le programme DPC relie les structures ou dirigeants locaux aux fédérations locales ou à des mouvements sociaux plus larges",
"Aucune information/information insuffisante pour émettre un jugement",
"Le programme DPC ne lie pas les structures ou les dirigeants des communautés locales à des fédérations ou des mouvements.",
"Le programme relie les structures ou les dirigeants des communautés locales aux fédérations locales.",
"Le programme relie les structures ou les dirigeants des communtautés locales aux fédérations locales et régionales.",
"Le programme relie les structures ou les dirigeants des communautés locales aux fédérations locales et régionales, et aux mouvements sociaux nationaux."],

p22:[
"G1 Les structures ou dirigeants communauttaires locaux du programme DPC sont liés au gouvernement du sous-district ou du district",
"Aucune information/information insuffisante pour émettre un jugement",
"Le gouvernement du sous=district ou du district n'est pas au courant du programme.",
"Le gouvernement du sous-district ou du district est au courant du programme, mais il n'existe pas de plate-forme / espace pour l'interaction entre les structures ou les dirigeants communautaires participatifs et les responsables du sous-district ou du district.",
"Le gouvernement du sous-district ou du district est au courant du programme, et il y a une interaction ad hoc entre les structures de participation communautaire ou les leaders, Le programme renforce la capacité de la communauté à revendiquer ses droits auprès du gouvernement du sous-district ou du district.",
"Le gouvernement du sous-district ou du district est au courant du programme DPC. Le programme DPC établit un engagement systématique entre la communauté et le gouvernement du sous-district ou du district pour atteindre les objectifs de la communauté."],

p23:[
"H1 Un suivi participatif est effectué",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas de suivi participatif communautaire.",
"Le suivi communautaire a lieu mais est principalement facilité par le personnel de première ligne.",
"La surveillance communautaire a lieu et est principalement facilité par les membres de la communauté. Le retour d'information  à la communauté au sens large [par le biais de sessions participatives] est toutefois ad-hoc",
"Le suivi participatif communautaire est au cœur de l'approche de suivi et d'évaluation du programme. Le suivi communautaire est facilité par les membres ou les structures de la communauté et comprend des rapports réguliers à la communauté dans son ensemble, par exemple tous les six mois."],

p24:[
"H2 Une évaluation participative est effectuée",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'y a pas d'évaluation participative de la communauté.",
"Les membres de la communauté sont impliqués dans UNE ou DEUX de ces étapes d'évaluation : 1) Planification; 2) Collecte des données; 3) Analyse; 4) Validation; 5) Conclusions et recommandation; 6) Planification des actions",
"Les membres de la communauté sont impliqués dans plusieurs (TROIS ou QUATRE)  de ces étapes d'évaluation : 1) Planification; 2) Collecte des données; 3) Analyse; 4) Validation; 5) Conclusions et recommandation; 6) Planification des actions",
"Les membres de la communauté sont au centre de TOUTES les étapes de l'évaluation : 1) Planification; 2) Collecte des données; 3) Analyse; 4) Validation; 5) Conclusions et recommandation; 6) Planification des actions."],

p25:[
"H3 Les résultats du suivi et de l'évaluation (S&E) sont désagrégés par sexe, par statut d'handicapé, et autres différences sociales pertinentes ET sont pris en compte",
"Aucune information/information insuffisante pour émettre un jugement",
"Pas de désagrégation des résultats en fonction des différences sociales.",
"Les résultats sont désagrégés, mais il manque un certain nombre de différences sociales pertinentes pour l'intervention. Il n'y a guère d'explication pour éclairer sur les différences de résultats entre différents groupes.",
"Les résultats sont désagrégés en fonctoin de toutes les différences sociales pertinentes pour l'intervention. Il y a des explications qui éclairent sur les différences de résultats entre différents groupes et ce que cela signifie pour le programme.",
"Les résultats sont désagrégés en fonctoin de toutes les différences sociaux pertinentes pour l'intervention. Il existe une bonne explication des raisons pour lesquelles les résultats sont différents pour les différents groupes et ce que cela signifie pour le programme [traduit en actions recommandées."],

p26:[
"I1 Les animateurs du programme DPC (qu'il s'agisse de dirigeants communautaires, de membres du personnel ou de partenaires facilitateurs) sont dotés de compétences et d'expériences pour leurs rôles.",
"Aucune information/information insuffisante pour émettre un jugement",
"Les animateurs reçoivent une orientation de base dans des environnements / cadres de formation formels (par exemple en salle de classe).",
"Les animateurs sont formés aux techniques d'animation de base ainsi qu'à l'analyse et à la planification participatives dans des environnements de formation formels (par exemple en salle de classe).",
"Les animateurs sont formés aux techniques d'animation, à l'analyse et à la planification participatives en classe et dans les communautés.",
"Les animateurs sont formés aux techniques d'animation, à l'analyse et à la planification participatives, ainsi qu'à l'action collective en classe et dans les communautés."],

p27:[
"I2 Le programme DPC comporte des dispositions raisonnables pour assurer la flexibilité nécessaire pour répondre aux changements dans la demande de facilitateurs communautaires (par exemple avec l'étendue / le champ du programme, les changements dans le contexte ou le rythme du DPC)",
"Aucune information/information insuffisante pour émettre un jugement",
"Aucune évaluation de l'évolution de la demande de facilitateurs communautaires ET / OU aucune provision de ressources pour augmenter l'échelle / champ / étendu du programme ET / OU aucun processus en place pour réduire le nombre de facilitateurs ou ralentir le rythme du programme.",
"Évaluations ad hoc du nombre et de la capacité des animateurs communautaires en fonction du contexte, de l'échelle prévue du programme, et du rythme du programme. Des changements sont apportés si les performances du programme sont insuffisantes,",
"Des évaluations régulières du nombre et des capacités des animateurs communautaires par rapport au contexte, a! l'échelle prévue du programme et au rythme du programme. Les changements sont effectués UNIQUEMENT si la performance du programme a été insuffisante",
"Des évaluations régulières du nombre et des capacités des animateurs communautaires par rapport au contexte, à l'échelle prévue du programme et au rythme du programme. Le programme a des dispositions budgétaires et des processus en place pour y répondre."],

p28:[
"I3 Le programme DPC comporte des dispositions raisonnables pour soutenir la qualité de l'animation locale (critères d'admission clairs ; évaluation des connaissances et des compétences ' offre de formation et de soutien aux animateurs locaux)",
"Aucune information/information insuffisante pour émettre un jugement",
"Il n'existe aucune disposition visant à soutenir la qualité de la facilitation locale. Il n'y a pas de critères d'admission clairs, aucune évaluation des connaissances et des compétences n'est effectuée et aucune disposition n'est prévue pour la formation et le soutien des animateurs locaux.",
"Il existe des dispositions ad hoc pour soutenir la facilitation locale. Le programme comporte l'une des composantes suivantes : 1) Il existe des critères d'admission claires ; 2) Une évaluation appropriée des connaissances et des compétences est effectuée ; 3) Il est prévu de former et de soutenir les animateurs locaux.",
"Il existe une disposition raisonnablement bonne pour soutenir la facilitation locale. Le programme comporte deux de éléments suivants 1) Il existe des critères d'admission clairs ; 2) Une évaluation adéquate des connaisances et des compétences est effectuée ; 3) il est prévu de former et de soutenir les animateurs locaux.",
"Les dispositions visant à soutenir la facilitation locale sont pleinement intégrées dans le programme. Le programme comporte tous les éléments suivants 1) Il existe des critères d'admission clairs ; 2) Une évaluation adéquate des connaisances et des compétences est effectuée ; 3) il est prévu de former et de soutenir les animateurs locaux."]
}