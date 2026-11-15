'use client';

import {useRef,useState} from 'react';
import type {FilmVideo} from '@/lib/edition/film-articles';
import type {Locale} from '@/lib/edition/types';

const t=(l:Locale,en:string,zh:string)=>l==='en'?en:zh;

export function InterviewPlayer({video,l}:{video:FilmVideo;l:Locale}){
 const player=useRef<HTMLVideoElement>(null);
 const [active,setActive]=useState(0);
 const chapters=video.chapters||[];
 const jump=(index:number)=>{
  const el=player.current;
  if(!el)return;
  el.currentTime=chapters[index].start;
  setActive(index);
  void el.play().catch(()=>{});
 };
 return <section id="interview-video" className={video.aspectRatio==='9/16'?'ed-film-video ed-film-video-portrait':'ed-film-video'}>
  <h2>{t(l,'Watch the interview','观看采访')}</h2>
  {chapters.length>0&&<p className="ed-interview-count">{t(l,`${chapters.length} questions · ${video.duration}`,`${chapters.length} 个问题 · ${video.duration}`)}</p>}
  <video ref={player} controls playsInline preload="metadata" poster={video.poster} aria-label={t(l,'C33 interview video','C33 采访视频')} onTimeUpdate={event=>{if(!chapters.length)return;const now=event.currentTarget.currentTime;let index=0;for(let i=1;i<chapters.length;i++)if(chapters[i].start<=now+0.25)index=i;setActive(index);}}><source src={video.src} type="video/mp4"/>{t(l,'Your browser cannot play this video.','你的浏览器无法播放此视频。')}</video>
  {chapters.length>0?<div className="ed-interview-chapters" aria-label={t(l,'Interview questions','采访问题')}>{chapters.map((chapter,index)=><button type="button" key={index} onClick={()=>jump(index)} aria-current={active===index?'true':undefined}><span>{String(index+1).padStart(2,'0')}</span><span>{chapter.title[l]}</span><span aria-hidden="true">▶</span></button>)}</div>:<p>{t(l,`From the C33 interview · ${video.duration}`,`C33 采访选段 · ${video.duration}`)}</p>}
 </section>;
}
