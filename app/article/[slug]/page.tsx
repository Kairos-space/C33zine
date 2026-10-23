import {notFound,redirect} from 'next/navigation';
import {getAllArticles,getArticleBySlug} from '@/lib/articles';

export function generateStaticParams(){
  return getAllArticles().map(article=>({slug:article.slug}));
}

export default function ArticlePage({params}:{params:{slug:string}}){
  if(!getArticleBySlug(params.slug))notFound();
  redirect(`/zh/archive/${params.slug}`);
}
