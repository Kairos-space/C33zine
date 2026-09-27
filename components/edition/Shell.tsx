import Link from 'next/link';
import Image from 'next/image';
import {LanguageLinks} from './Controls';
import {categoryNames,type Locale} from '@/lib/edition/types';
export default function Shell({locale,children}:{locale:Locale;children:React.ReactNode}){const en=locale==='en';return <div className="edition" lang={en?'en':'zh-CN'}>
 <a href="#edition-main" className="ed-skip">{en?'Skip to content':'跳到正文'}</a>
 <header className="ed-header">
 <div className="ed-top"><span>{en?'An independent magazine':'时尚、艺术与文化独立刊物'}</span><LanguageLinks locale={locale}/></div>
 <div className="ed-mast"><Link href={`/${locale}`} aria-label={en?'C33 home':'C33 首页'}><Image src="/logo-c33.png" width={779} height={436} alt="C33" priority/></Link><p>{en?'Fashion, art & culture.':'时尚、艺术与文化。'}</p><Link className="ed-subscribe" href={`/${locale}/contact#subscribe`}>{en?'Subscribe ↗':'订阅 ↗'}</Link></div>
 <nav className="ed-nav" aria-label={en?'Main navigation':'主导航'}><div>{Object.entries(categoryNames).map(([key,label])=><Link key={key} href={`/${locale}/${key}`}>{label[locale]}</Link>)}<Link href={`/${locale}/about`}>{en?'About':'关于'}</Link></div><div className="ed-nav-tools"><Link href={`/${locale}/search`}>{en?'Search':'搜索'}</Link><Link href={`/${locale}/saved`}>{en?'Reading list':'收藏'}</Link></div></nav>
 </header>
 <main id="edition-main" className="ed-main">{children}</main>
 <footer className="ed-footer"><div><Link href={`/${locale}`} className="ed-footer-logo">C33</Link><p>{en?'An independent magazine covering fashion, art and culture.':'一本关注时尚、艺术与文化的独立刊物。'}</p></div><nav aria-label={en?'More from C33':'更多内容'}><Link href={`/${locale}/archive`}>{en?'All articles':'全部文章'}</Link><Link href={`/${locale}/topics`}>{en?'Topics':'专题'}</Link><Link href={`/${locale}/issues`}>{en?'Issues':'期刊'}</Link><Link href={`/${locale}/contact`}>{en?'Contact & submissions':'联系与投稿'}</Link><a href="https://www.instagram.com/c33zine/">Instagram ↗</a><Link href={`/${locale}/legal`}>{en?'Legal information':'法律信息'}</Link></nav><div className="ed-footer-bottom"><span>© C33 · 2026</span><span>{en?'Editor-in-chief: Kairos Zhang':'主编：Kairos Zhang'}</span><Link href={`/${locale}/legal`}>LUMEN ADVANCE</Link></div></footer>
 </div>}
