import Link from 'next/link';
import Image from 'next/image';
import {MDXRemote} from 'next-mdx-remote/rsc';
import {ArticleActions} from './Controls';
import {filmCultureTitle} from '@/lib/edition/film-culture';
import {getFilmArticles,getFilmCover,type FilmArticle,type FilmImage} from '@/lib/edition/film-articles';
import {dateText,type Locale} from '@/lib/edition/types';

const t=(l:Locale,en:string,zh:string)=>l==='en'?en:zh;
const href=(article:FilmArticle,l:Locale)=>`/${l}/read/${article.slug}`;

function FilmFigure({image,l,cover=false}:{image:FilmImage;l:Locale;cover?:boolean}){return <figure className={cover?'ed-film-figure ed-film-cover':'ed-film-figure'}><Image src={image.src} alt={image.alt[l]} width={image.width} height={image.height} sizes={cover?'(max-width: 700px) 100vw, 1000px':'(max-width: 700px) 100vw, 760px'} priority={cover}/><figcaption><span>{image.caption[l]}</span><small>{image.credit[l]} · <a href={image.sourcePage}>{t(l,'Image source','图片来源')} ↗</a></small></figcaption></figure>}

export function FilmCard({article,l}:{article:FilmArticle;l:Locale}){const cover=getFilmCover(article);return <article className="ed-film-card"><Link href={href(article,l)} className="ed-film-card-image" tabIndex={-1} aria-hidden="true"><Image src={cover.src} alt="" width={cover.width} height={cover.height} sizes="(max-width: 700px) 100vw, 45vw"/></Link><div className="ed-kicker">{filmCultureTitle[l]} / {article.tag[l]}</div><h3><Link href={href(article,l)}>{article.title[l]}</Link></h3><p>{article.summary[l]}</p><small>{article.byline[l]}{article.publishedAt&&<> · <time dateTime={article.publishedAt}>{dateText(article.publishedAt,l)}</time></>}</small></article>}

function illustratedBody(article:FilmArticle,l:Locale){return article.body[l].trim().split(/\n\s*\n/).map((block,index)=>{
 const figures=article.images.filter(image=>image.role==='body'&&image.afterParagraph===index).map(image=>`<FilmFigure id="${image.id}" />`);
 return [block,...figures].join('\n\n');
}).join('\n\n');}

export function FilmReadPage({article,l}:{article:FilmArticle;l:Locale}){const cover=getFilmCover(article);const images=new Map(article.images.map(image=>[image.id,image]));const related=getFilmArticles().filter(item=>article.relatedSlugs.includes(item.slug));return <article className="ed-film-read"><header className="ed-article-header"><Link className="ed-back-link" href={`/${l}/film`}>← {filmCultureTitle[l]}</Link><div className="ed-kicker">{filmCultureTitle[l]} / {article.tag[l]}</div><h1>{article.title[l]}</h1><p className="ed-deck">{article.summary[l]}</p><div className="ed-byline"><span>{article.byline[l]}</span>{article.publishedAt&&<time dateTime={article.publishedAt}>{dateText(article.publishedAt,l)}</time>}</div><ArticleActions id={`film:${article.slug}`} locale={l}/></header><FilmFigure image={cover} l={l} cover/><div className="ed-prose ed-film-prose"><MDXRemote source={illustratedBody(article,l)} components={{FilmFigure:({id}:{id:string})=>{const image=images.get(id);return image?<FilmFigure image={image} l={l}/>:null;}}}/></div><section className="ed-sources"><Link href={`/${l}/film`}>← {filmCultureTitle[l]}</Link></section><section className="ed-section ed-film-related"><h2>{t(l,'More in Film','继续阅读电影')}</h2><div>{related.map(item=><Link href={href(item,l)} key={item.slug}>{item.title[l]} ↗</Link>)}</div></section></article>}
