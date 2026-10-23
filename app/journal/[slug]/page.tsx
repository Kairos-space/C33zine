import {notFound,redirect} from 'next/navigation';
import {getAllJournalPosts,getJournalPost} from '@/lib/journal';

export function generateStaticParams(){
  return getAllJournalPosts().map(post=>({slug:post.slug}));
}

export default function JournalPostPage({params}:{params:{slug:string}}){
  if(!getJournalPost(params.slug))notFound();
  redirect(`/zh/archive/${params.slug}`);
}
