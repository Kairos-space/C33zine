import entries from '@/content/film/entries.json';
import asvoffInterviews from '@/content/film/asvoff18-interviews.json';
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
 video?:{src:string;poster:string;duration:string;aspectRatio:'16/9'|'9/16'};
};

const articles=[...asvoffInterviews,...entries] as FilmArticle[];

export function getFilmArticles():FilmArticle[]{return articles.filter(article=>article.status==='published'||(process.env.C33_EDITORIAL_PREVIEW==='1'&&article.status==='draft'));}
export function getFilmArticle(slug:string):FilmArticle|undefined{return getFilmArticles().find(a=>a.slug===slug);}
export function getFilmCover(article:FilmArticle):FilmImage{return article.images.find(image=>image.role==='cover')!;}
