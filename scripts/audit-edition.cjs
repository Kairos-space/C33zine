const fs=require('fs'),path=require('path'),matter=require('gray-matter');
const notes={
'a-qui-appartient-une-fleur':'诉讼、判赔金额及上诉状态需判决／官方文件；不沿用旧摘要作新版新闻事实。',
'alaia-apres-pieter-mulier':'任职及离任日期、AW26季别、引语及品牌归属需官方时间线。',
'and-coach-gen-z':'营收、产品价、并购案、平台项目时间需财报／法院／品牌来源。',
'appartement-parisien':'建筑历史、人名及风格泛化需参考资料。',
'appartement-temoin':'缺封面；人物引语及法规陈述待核。',
'appropriation-culturelle':'盘扣与马面裙术语、品牌事件日期及来源待核。',
'du-tapis-rouge-a-latelier':'缺封面；人物／杂志拍摄实例、摄影署名待核。',
'la-chaise-de-designer':'缺封面；设计师、产品年代、售价及生产事实待核。',
'la-mode-a-tue-le-serif':'缺封面；2012/2017/2018/2023/2025换标时间和设计师引语需原始出处。',
'la-valse-des-directeurs-artistiques':'创意总监与任职时间集中变动；须按原发稿日期重建时间线。',
'le-salon-wabi-sabi':'缺封面；文化术语出处、设计人物、作品年代待核。',
'lexique-du-deplacement':'术语释义与当季案例待核。',
'max-mara-shanghai':'上海发布的地点、季别、日期及系列背景待核。',
'mode-au-cinema':'片名、服装／设计师、人名及引语逐项待核。',
'pourquoi-c33':'历史品牌宣言完整保留；不作为新版About，不覆盖历史地域叙事。',
'pourquoi-la-mode-se-deplace':'目的地秀场地点、日期和系列季别待核。',
'projets-mode-transfrontaliers':'联名授权、供应链及项目细节需原始采访或品牌出处。',
'ralph-lauren-encore-a-la-mode':'封面写2027春夏男装，原日期2026-06-11；季别对应待核。242%股价增幅的区间及数据源缺失。',
'representation-et-narration':'艺人合作头衔、合约泛化、危机事件日期及人数待核。',
'tres-parisien':'已据Palais Galliera核对1920创刊、Joumard/Joujou、pochoir与后期摄影；新建核源短版。原长稿的20–30模板、历史人名与引语尚待核，封面署名缺。',
'depuis-latelier-juin-2026':'原稿称创刊号5篇，当前期号目录可能已增补；保留日期，不能当作当前统计。无明确作者元数据。',
'depuis-les-defiles-juin-2026':'无明确具体秀场／季别来源，第一人称现场经历未能证明，不移植成新报道。无作者元数据。',
'deux-vitrines-paris-shanghai':'完整中英阅读版；标为历史评论，保留原日期。城市泛化为作者观点，不作调查结论。无作者元数据。',
'le-reflux-du-quiet-luxury':'完整中英阅读版；标为历史评论，保留原日期。不作为2026年9月市场趋势证据。无作者元数据。',
'note-editrice-pourquoi-la-mode':'保留历史地域叙事；不搬进新About。无作者元数据。',
'un-bouton-noue':'“不缝合、全凭张力”属于过度绝对化工艺说明；核对工艺资料后再译。无作者元数据。'
};
let rows=[];
for(const kind of ['articles','journal'])for(const f of fs.readdirSync('content/'+kind).filter(f=>f.endsWith('.mdx'))){const {data:d,content}=matter(fs.readFileSync('content/'+kind+'/'+f,'utf8'));const slug=f.replace('.mdx','');const images=[...content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(x=>x[1]);rows.push({slug,title:d.title,date:String(d.date||''),kind,author:d.author||null,category:d.category||d.kind,original:`/${kind==='articles'?'article':'journal'}/${slug}`,cover:d.cover||null,coverExists:d.cover?fs.existsSync('public'+d.cover):null,imagePaths:images,externalLinks:[...content.matchAll(/https?:\/\/[^\s)<>]+/g)].map(x=>x[0]),note:notes[slug]});}
fs.writeFileSync('docs/content-inventory.json',JSON.stringify(rows,null,2)+'\n');
let md='# C33 双语改版：内容清单与编辑审计\n\n审计日期：2026-09-26。基线：main 9c2fa9f。此分支仅供本地预览，不部署、不覆盖旧稿。\n\n## 实施范围\n\n新入口 /en、/zh；Fashion、Culture、People、About 立即展示，三个内容栏目都有阅读稿。艺术、电影、设计等先收于 Culture，不建空栏目。NOW/RADAR/VIEW 作为内容标签。新增 Milan SS27 专题（2篇），不建没有稿件的巴黎专题。\n\n旧 /、/article/*、/journal/*、/issue/*、/category/*、About、词汇表、投稿、联系、媒体、法律页面等原路由继续存在。旧文件、图片不删除。新版 /archive 收录全部26条，中文原文可读；英文全文未完成时明确提示并提供中文原文及旧中法页面。搜索覆盖新版双语正文及旧中文正文。\n\n## 实际完成\n\n- 5篇完整中英阅读稿：Marni（照片观察，非现场采访）、宋威龙出发造型（区分9月23日源图日期与9月26日网站版日期）、Très Parisien核源短版（原日期6月17日，修订9月26日）、静奢之后与两扇橱窗（历史评论全文英译、保留中文和原日期）。\n- 26条旧稿英文目录标题及中性英文简介；6条原法文Journal标题补中文目录名。仅目录翻译不标作全文完成。\n- 双语首页、3栏目、专题列表／专题页、文章、档案、搜索、About、联系、订阅、页脚、法律摘要、期刊目录、浏览器收藏。\n- 旧刊目录的正文翻译及24篇旧稿英文全文仍待补；不得用中文正文冒充英文已译。Très Parisien短版不代表原长稿完整翻译。\n- 主推使用有来源记录的本地原图；旧稿缺署名封面不复制进新版。原始文件保留。\n\n## 合并与保留原则\n\n合并的是入口与索引：城市、艺术设计、文化等旧分类按内容映射到新主导航，旧分类页仍保留。旧“为什么C33”及宣言作为历史材料保留，不替代现行About。6篇Journal不删除，也不捏造原文件未记载的个人作者（旧loader默认Kairos，此版不继承该默认值）。Instagram 4条旧外链全部保留；本次扩写2条，不强行扩写其他条目。\n\n## 逐篇清单\n\n检查了原文件标题、日期、署名、语言段落、图片路径与外链记录。26篇正文均无可追溯外部URL；这不等于没有研究依据，但现有库无法验证全部事实。以下待核项目不是已核实结论。没有擅改历史日期。\n\n| 原文与链接 | 原日期 | 作者元数据 | 处理及待补 |\n|---|---|---|---|\n';
for(const r of rows)md+=`| [${r.title.replaceAll('|','／')}](${r.original}) | ${r.date} | ${r.author||'未记录，不自动补署名'} | ${r.note} |\n`;
md+='\n## 来源与素材\n\n- 宋威龙：https://www.sina.cn/news/detail/5346320581660359.html （本次核对2026-09-23来源日期；Megastar_S转引，无明确摄影作者）。\n- Marni：https://www.vogue.com/fashion-shows/spring-2027-ready-to-wear/marni （本次核对SS27、9月24日；沿用既有图库Filippo Fior / Gorunway.com署名；不转载其评论）。\n- Très Parisien：https://www.palaisgalliera.paris.fr/en/collections/bibliotheque-numerique/tres-parisien （创刊、负责人、工艺与后期摄影）。\n- 新增5个原始照片副本来自此前C33制作输出，未改图、未删除旧图片。来源署名不等于版权许可，网站复用授权待归档。\n\n## 待补与发布边界\n\n完整旧稿英译、上表事实核查、5张缺失封面、旧素材摄影／授权信息、法定出版负责人资料仍待完成。订阅沿用原有环境变量端点；未配置时为邮件申请，不显示虚假订阅成功。预览新增页面均noindex；批准发布后才解除，补全sitemap和首页切换策略。当前根首页继续保留旧版，新版可从 /en 或 /zh 进入。\n';
fs.writeFileSync('docs/CONTENT-REVIEW.md',md);
console.log(JSON.stringify({items:rows.length,missingCovers:rows.filter(r=>r.coverExists===false).length,originalURLs:rows.map(r=>r.original)}));
