import entries from '@/content/film/entries.json';
import type {Pair} from './types';

export type FilmImage={
 id:string;
 src:string;
 role:'cover'|'body';
 afterParagraph:number|null;
 caption:Pair;
 alt:Pair;
 credit:Pair;
 sourcePage:string;
 width:number;
 height:number;
};

export type FilmArticle={
 slug:string;
 category:'culture';
 subsection:'film';
 publishedAt:string|null;
 status:'draft'|'published';
 tag:Pair;
 title:Pair;
 summary:Pair;
 byline:Pair;
 body:Pair;
 relatedSlugs:string[];
 images:FilmImage[];
};

const articles=entries as FilmArticle[];

export function getFilmArticles():FilmArticle[]{return articles.filter(article=>article.status==='published');}
export function getFilmArticle(slug:string):FilmArticle|undefined{return getFilmArticles().find(a=>a.slug===slug);}
export function getFilmCover(article:FilmArticle):FilmImage{return article.images.find(image=>image.role==='cover')!;}
