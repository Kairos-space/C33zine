import Link from 'next/link';
import Image from 'next/image';
import {ArticleActions} from './Controls';
import {dateText,type Locale,type Story} from '@/lib/edition/types';

const path='/images/edition/thai-front-row/';
const figure=(src:string,alt:string,caption:string,kind:'portrait'|'wide'='portrait')=><figure className={`thai-figure thai-figure--${kind}`}><Image src={path+src} alt={alt} width={kind==='wide'?1600:1200} height={kind==='wide'?1067:1600} sizes="(max-width:700px) 100vw, 750px"/><figcaption>{caption}</figcaption></figure>;
function Text({s,l,from,to,lead=false}:{s:Story;l:Locale;from:number;to:number;lead?:boolean}){return <div className="thai-copy">{s.body[l].slice(from,to).map((block,i)=>block.startsWith('## ')?<h2 key={block}>{block.slice(3)}</h2>:<p className={lead&&i===0?'thai-lead':undefined} key={block}>{block}</p>)}</div>}

export default function ThaiFrontRow({s,l}:{s:Story;l:Locale}){
  const chinese=l==='zh';
  return <article className="thai-feature" lang={chinese?'zh-CN':'en'}>
    <header className="thai-intro">
      <p className="thai-eyebrow">{chinese?'时尚 / 观察 · 2027 春夏':'FASHION / ANALYSIS · SPRING–SUMMER 2027'}</p>
      <h1>{s.title[l]}</h1>
      <p className="thai-dek">{s.summary[l]}</p>
      <div className="thai-meta"><span>{chinese?'撰文：readmeifyoucan 与编辑团队':'By readmeifyoucan and the editorial team'}</span><time dateTime={s.date}>{dateText(s.date,l)}</time></div>
      <ArticleActions id={s.slug} locale={l}/>
    </header>

    <figure className="thai-figure thai-hero"><div className="thai-pair"><Image src={path+'lingling-dior.jpg'} alt="Lingling Kwong at Dior" width={1200} height={1500} sizes="(max-width:700px) 50vw, 375px" priority/><Image src={path+'orm-dior.jpg'} alt="Orm Kornnaphat at Dior" width={1200} height={1500} sizes="(max-width:700px) 50vw, 375px" priority/></div><figcaption>{chinese?'邝玲玲与 Orm 出席 Dior 大秀。摄影：Arnold Jerocki / Getty Images for Dior，转引自 Red Carpet Fashion Awards。':'Lingling Kwong and Orm Kornnaphat at Dior, Paris. Photos: Arnold Jerocki / Getty Images for Dior, via Red Carpet Fashion Awards.'}</figcaption></figure>

    {chinese?<>
      <Text s={s} l={l} from={0} to={2}/>
      {figure('milk-saint-laurent.jpg','Milk Pansa 出席 Saint Laurent','Milk Pansa 出席 Saint Laurent。摄影：Getty Images，转引自 Teen Vogue。')}
      <Text s={s} l={l} from={2} to={9}/>
      {figure('becky-miu-miu.jpg','Becky Armstrong 出席 Miu Miu','Becky Armstrong 出席 Miu Miu。图片：Becky Entertainment / Weibo。')}
      <Text s={s} l={l} from={9} to={13}/>
      {figure('lena-miu-chanel.jpg','Lena Lalina 与 Miu Natsha 出席 Chanel','Lena Lalina 与 Miu Natsha 出席 Chanel。摄影：German Larkin / Vogue。')}
      <Text s={s} l={l} from={13} to={18}/>
      {figure('freen-valentino.jpg','Freen Sarocha 出席 Valentino','Freen Sarocha 出席 Valentino。摄影：Vittorio Zunino Celotto / Getty Images，转引自 Vogue Japan。')}
      <Text s={s} l={l} from={18} to={31}/>
      {figure('mai-lacoste.jpg','Mai Davika 出席 Lacoste','Mai Davika 出席 Lacoste。图片：GloryCommune。')}
      <Text s={s} l={l} from={31} to={32}/>
      <div className="thai-duo"><figure><Image src={path+'song-weilong-gucci.jpg'} alt="宋威龙出席 Gucci" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>宋威龙出席 Gucci。</figcaption></figure><figure><Image src={path+'chen-zheyuan-saint-laurent.jpg'} alt="陈哲远出席 Saint Laurent" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>陈哲远出席 Saint Laurent。</figcaption></figure></div>
      <div className="thai-ending"><Text s={s} l={l} from={32} to={35}/></div>
    </>:<>

    <Text s={s} l={l} from={0} to={5} lead/>
    {figure('milk-saint-laurent.jpg','Milk Pansa in black tailoring at Saint Laurent','Milk Pansa at Saint Laurent. Photo: Getty Images, via Teen Vogue.')}
    <Text s={s} l={l} from={5} to={9}/>
    {figure('becky-miu-miu.jpg','Becky Armstrong at Miu Miu','Becky Armstrong at Miu Miu. Photo: Becky Entertainment, via Weibo.')}
    {figure('lena-miu-chanel.jpg','Lena Lalina and Miu Natsha at Chanel','Lena Lalina and Miu Natsha at Chanel. Photo: German Larkin / Vogue.')}
    <Text s={s} l={l} from={9} to={11}/>
    <div className="thai-duo"><figure><Image src={path+'song-weilong-gucci.jpg'} alt="Song Weilong at Gucci in Milan" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Song Weilong at Gucci, Milan.</figcaption></figure><figure><Image src={path+'chen-zheyuan-saint-laurent.jpg'} alt="Chen Zheyuan at Saint Laurent in Paris" width={333} height={437} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Chen Zheyuan at Saint Laurent, Paris.</figcaption></figure></div>
    <Text s={s} l={l} from={11} to={12}/>
    <div className="thai-duo"><figure><Image src={path+'freen-valentino.jpg'} alt="Freen Sarocha at Valentino" width={1600} height={2400} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Freen Sarocha at Valentino. Photo: Vittorio Zunino Celotto / Getty Images, via Vogue Japan.</figcaption></figure><figure><Image src={path+'mai-lacoste.jpg'} alt="Mai Davika at Lacoste" width={853} height={1280} sizes="(max-width:700px) 100vw, 490px"/><figcaption>Mai Davika at Lacoste. Photo: GloryCommune.</figcaption></figure></div>
    <div className="thai-ending"><Text s={s} l={l} from={12} to={13}/></div>
    </>}
    <section className="thai-sources"><h2>{chinese?'来源与延伸阅读':'Sources & further reading'}</h2><ul>{s.sources.map((source,i)=><li key={i}><a href={source.url}>{typeof source.label==='string'?source.label:source.label[l]} ↗</a></li>)}</ul></section>
    <p className="thai-back"><Link href={`/${l}/fashion`}>← {chinese?'返回时尚栏目':'More fashion stories'}</Link></p>
  </article>;
}
