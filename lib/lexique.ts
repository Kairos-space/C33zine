export type LexiqueEntry = {
  slug: string;
  fr: string;
  cn: string;
  pinyin?: string;
  /** Field of use — Branding, Production, Critique, etc. */
  field: string;
  fieldCn: string;
  /** Short definition (1-3 sentences each side) */
  defFr: string;
  defCn: string;
  /** Optional note distinguishing the FR and CN usages */
  noteFr?: string;
  noteCn?: string;
};

/**
 * Lexique — bilingual short-form definitions of terms used across C33.
 * Each entry sits between the two languages and notes how the same idea
 * shifts meaning between contexts.
 */
export const lexique: LexiqueEntry[] = [
  {
    slug: "ambassadeur",
    fr: "Ambassadeur de marque",
    cn: "代言人",
    pinyin: "dài yán rén",
    field: "Marque",
    fieldCn: "品牌",
    defFr:
      "Personne publique engagée par une marque pour porter, sur la durée, un récit qui ne s'écrit pas avec un simple visage. Le contrat couvre l'image, le calendrier et — souvent — le silence sur le reste.",
    defCn:
      "品牌签约的公众人物,长期承载某一束叙事——不是「找一张脸」,而是接管一段形象、档期与其它领域沉默的契约。",
    noteFr:
      "À ne pas confondre avec l'égérie (figure plus ponctuelle, plus iconique) ni avec l'influenceur (paiement à la prestation, pas au récit).",
    noteCn:
      "区别于「形象大使」(更图腾化、单次)与「博主合作」(按发布次数计费,不承载叙事)。",
  },
  {
    slug: "fabrique",
    fr: "La fabrique",
    cn: "制造",
    pinyin: "zhì zào",
    field: "Critique",
    fieldCn: "评论",
    defFr:
      "Tout ce qui produit l'image officielle d'une marque — ateliers, agences, photographes, équipes RP — et qui demeure le plus souvent invisible pour le public. C33 utilise ce mot pour désigner l'envers du décor.",
    defCn:
      "塑造品牌官方形象的全部环节——工作室、代理机构、摄影、公关团队——通常对读者不可见。C33 用这个词专指「被叙事遮蔽的那个内里」。",
  },
  {
    slug: "publi-redactionnel",
    fr: "Publi-rédactionnel",
    cn: "软文",
    pinyin: "ruǎn wén",
    field: "Média",
    fieldCn: "媒体",
    defFr:
      "Contenu payé par une marque mais publié dans le ton et la maquette d'un article éditorial. En France, la loi impose la mention 「Communication」 ; en pratique, elle est souvent absente.",
    defCn:
      "由品牌付费、但以编辑文章的语气和版式呈现的内容。法国法律要求明确标注「Communication」;现实中常常缺席。",
    noteFr:
      "C33 ne publie pas de contenu sponsorisé non identifié.",
    noteCn:
      "C33 不发布任何未经标识的赞助内容。",
  },
  {
    slug: "quiet-luxury",
    fr: "Luxe discret",
    cn: "静奢",
    pinyin: "jìng shē",
    field: "Tendance",
    fieldCn: "趋势",
    defFr:
      "Codes visuels du luxe européen débarrassés des logos voyants — palette neutre, matières lourdes, coupes nettes. Cycle commencé en 2022, devenu lieu commun après 2024.",
    defCn:
      "去 logo 化的欧洲奢侈品视觉系统——中性色、厚重面料、利落剪裁。2022 年起的周期,2024 年后已成共识。",
    noteFr:
      "Dans la critique francophone, le terme renvoie à une discrétion de classe. Dans la lecture sinophone, il porte une charge de moralisation de la dépense.",
    noteCn:
      "在法语评论中,这个词指向「阶级的克制」;在中文世界,它则常被赋予「消费的道德化」色彩。",
  },
  {
    slug: "appropriation-culturelle",
    fr: "Appropriation culturelle",
    cn: "文化挪用",
    pinyin: "wén huà nuó yòng",
    field: "Critique",
    fieldCn: "评论",
    defFr:
      "Usage d'éléments d'une culture par des acteurs extérieurs à elle, avec un effet de récit dans d'autres contextes. Terme à l'origine neutre, devenu polémique sous le poids de l'orientalisme et de l'ethnocentrisme.",
    defCn:
      "外部行为者使用某一文化元素,并在其他文化语境中产生叙事影响。原本是中性表达,因东方主义与民族中心主义的累积负担而带上批判色彩。",
    noteFr:
      "À distinguer de l'inappropriation culturelle, qui désigne l'usage maladroit ou erroné — confusions de provenance, méconnaissance du contexte, etc.",
    noteCn:
      "需与「文化不当挪用」区分:后者特指引用时的不当、误读或来源混淆。",
  },
  {
    slug: "transfrontalier",
    fr: "Projet transfrontalier",
    cn: "跨境项目",
    pinyin: "kuà jìng xiàng mù",
    field: "Production",
    fieldCn: "生产",
    defFr:
      "Tournage, campagne ou activation menée hors du marché principal de la marque — typiquement entre Paris et un marché asiatique. Implique une chaîne longue : agence centrale, agence locale, talents, équipes terrain.",
    defCn:
      "在品牌主市场之外进行的拍摄、传播或活动——典型如巴黎与中国市场之间。链路长:总部代理、当地代理、艺人、执行团队多层叠合。",
  },
  {
    slug: "deplacement",
    fr: "Déplacement",
    cn: "位移",
    pinyin: "wèi yí",
    field: "Critique",
    fieldCn: "评论",
    defFr:
      "Redistribution du pouvoir de la mode entre lieux, langues et marchés : un vêtement n'est plus défini au seul centre qui le produit, mais aux multiples endroits où il est lu, jugé et acheté. Thème du numéro 02.",
    defCn:
      "时尚权力在地点、语言与市场之间的重新分配:一件衣服不再只由生产它的中心定义,而是在被阅读、被审判、被购买的多个现场被共同定义。第二期主题。",
    noteFr:
      "Le déplacement ne supprime pas le centre ; il lui retire le monopole de la lecture.",
    noteCn: "位移不取消中心,只是收回了中心对「读法」的垄断。",
  },
  {
    slug: "traduction-culturelle",
    fr: "Traduction culturelle",
    cn: "文化转译",
    pinyin: "wén huà zhuǎn yì",
    field: "Critique",
    fieldCn: "评论",
    defFr:
      "Travail par lequel une marque transpose un signe d'une culture vers une autre en assumant l'écart, plutôt qu'en le masquant. À distinguer de la simple citation décorative.",
    defCn:
      "品牌把一个文化符号从一种语境移入另一种语境时所做的工作——承认而非掩盖其中的落差。与单纯的装饰性引用不同。",
    noteFr:
      "Là où l'appropriation prélève, la traduction négocie : elle demande un consentement, une source, un interlocuteur.",
    noteCn:
      "挪用是「拿取」,转译是「协商」:它需要授权、来源,以及一个对话的对象。",
  },
  {
    slug: "maison",
    fr: "Maison",
    cn: "时装屋",
    pinyin: "shí zhuāng wū",
    field: "Marque",
    fieldCn: "品牌",
    defFr:
      "Marque de mode dont la valeur repose autant sur un héritage et un récit que sur ses produits. Le mot promet une continuité — un « chez-soi » esthétique que chaque directeur artistique est censé habiter sans le détruire.",
    defCn:
      "其价值既来自产品、也来自传承与叙事的时尚品牌。这个词承诺一种延续性——一处美学上的「家」,每一任创意总监理应入住而不拆毁。",
    noteFr:
      "Quand les directeurs artistiques se remplacent vite, la « maison » se révèle moins une demeure qu'un récit qu'on relit.",
    noteCn:
      "当创意总监快速更替,「时装屋」显出的与其说是一座宅邸,不如说是一段被反复重读的叙事。",
  },
  {
    slug: "createur-systeme",
    fr: "Créateur-système",
    cn: "系统型设计师",
    pinyin: "xì tǒng xíng shè jì shī",
    field: "Production",
    fieldCn: "生产",
    defFr:
      "Directeur artistique dont la force tient moins à un style signature qu'à sa capacité à faire fonctionner tout un système : image, produit, défilé, retail et commerce alignés. Profil recherché des grands groupes.",
    defCn:
      "其能力不在于某种签名式风格,而在于让整套系统协同运转——形象、产品、秀场、零售与商业彼此对齐。是各大集团当下最想要的那类人。",
  },
  {
    slug: "soft-power-commercial",
    fr: "Soft power commercial",
    cn: "商业软实力",
    pinyin: "shāng yè ruǎn shí lì",
    field: "Marque",
    fieldCn: "品牌",
    defFr:
      "Capacité d'une marque à imposer son goût et son récit au-delà de son marché d'origine, jusqu'à façonner ce qu'un autre pays juge désirable. Forme douce, mais bien réelle, d'influence.",
    defCn:
      "一个品牌让自己的品味与叙事越出原属市场、乃至塑造另一个国家「何为可欲」的能力。一种柔软却真实的影响力。",
  },
];

export function getLexiqueEntry(slug: string): LexiqueEntry | null {
  return lexique.find((e) => e.slug === slug) ?? null;
}
