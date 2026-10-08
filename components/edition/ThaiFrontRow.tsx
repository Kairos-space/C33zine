import Link from 'next/link';
import Image from 'next/image';
import {ArticleActions} from './Controls';
import {dateText,type Locale,type Story} from '@/lib/edition/types';

const path='/images/edition/thai-front-row/';
const figure=(src:string,alt:string,caption:string,kind:'portrait'|'wide'='portrait')=><figure className={`thai-figure thai-figure--${kind}`}><Image src={path+src} alt={alt} width={kind==='wide'?1600:1200} height={kind==='wide'?1067:1600} sizes="(max-width:700px) 100vw, 750px"/><figcaption>{caption}</figcaption></figure>;
function Text({s,from,to,lead=false}:{s:Story;from:number;to:number;lead?:boolean}){return <div className="thai-copy">{s.body.en.slice(from,to).map((block,i)=>block.startsWith('## ')?<h2 key={block}>{block.slice(3)}</h2>:<p className={lead&&i===0?'thai-lead':undefined} key={block}>{block}</p>)}</div>}

export default function ThaiFrontRow({s,l}:{s:Story;l:Locale}){
  const chinese=l==='zh';
  return <article className="thai-feature" lang="en">
    <header className="thai-intro">
      <p className="thai-eyebrow">FASHION / ANALYSIS · SPRING–SUMMER 2027</p>
      <h1>{s.title.en}</h1>
      <p className="thai-dek">{s.summary.en}</p>
      <div className="thai-meta"><span>By readmeifyoucan and the editorial team</span><time dateTime={s.date}>{dateText(s.date,'en')}</time></div>
      <ArticleActions id={s.slug} locale={l}/>
      {chinese&&<p className="thai-language-note" lang="zh-CN">本文目前提供英文全文。<a href={s.original}>阅读中文原文 ↗</a></p>}
    </header>

    <figure className="thai-figure thai-hero"><div className="thai-pair"><Image src={path+'lingling-dior.jpg'} alt="Lingling Kwong at Dior" width={1200} height={1500} sizes="(max-width:700px) 50vw, 375px" priority/><Image src={path+'orm-dior.jpg'} alt="Orm Kornnaphat at Dior" width={1200} height={1500} sizes="(max-width:700px) 50vw, 375px" priority/></div><figcaption>Lingling Kwong and Orm Kornnaphat at Dior, Paris. Photos: Arnold Jerocki / Getty Images for Dior, via Red Carpet Fashion Awards.</figcaption></figure>

    <Text s={s} from={0} to={5} lead/>
    {figure('milk-saint-laurent.jpg','Milk Pansa in black tailoring at Saint Laurent','Milk Pansa at Saint Laurent. Photo: Getty Images, via Teen Vogue.')}
    <Text s={s} from={5} to={9}/>
    {figure('becky-miu-miu.jpg','Becky Armstrong at Miu Miu','Becky Armstrong at Miu Miu. Photo: Becky Entertainment, via Weibo.')}
    {figure('lena-miu-chanel.jpg','Lena Lalina and Miu Natsha at Chanel','Lena Lalina and Miu Natsha at Chanel. Photo: German Larkin / Vogue.')}
    <Text s={s} from={9} to={11}/>
    <div className="thai-duo"><figure><Image src={path+'song-weilong-gucci.jpg'} alt="Song Weilong at Gucci in Milan" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Song Weilong at Gucci, Milan.</figcaption></figure><figure><Image src={path+'chen-zheyuan-saint-laurent.jpg'} alt="Chen Zheyuan at Saint Laurent in Paris" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Chen Zheyuan at Saint Laurent, Paris.</figcaption></figure></div>
    <Text s={s} from={11} to={12}/>
    <div className="thai-duo"><figure><Image src={path+'freen-valentino.jpg'} alt="Freen Sarocha at Valentino" width={1600} height={2400} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Freen Sarocha at Valentino. Photo: Vittorio Zunino Celotto / Getty Images, via Vogue Japan.</figcaption></figure><figure><Image src={path+'mai-lacoste.jpg'} alt="Mai Davika at Lacoste" width={853} height={1280} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Mai Davika at Lacoste. Photo: GloryCommune.</figcaption></figure></div>
    <div className="thai-ending"><Text s={s} from={12} to={13}/></div>
    <section className="thai-sources"><h2>{chinese?'来源与延伸阅读':'Sources & further reading'}</h2><ul>{s.sources.map((source,i)=><li key={i}><a href={source.url}>{typeof source.label==='string'?source.label:source.label[l]} ↗</a></li>)}</ul></section>
    <p className="thai-back"><Link href={`/${l}/fashion`}>← {chinese?'返回时尚栏目':'More fashion stories'}</Link></p>
  </article>;
}
