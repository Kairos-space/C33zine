"use client";
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {useEffect,useState} from 'react';
import type {Locale} from '@/lib/edition/types';
export function LanguageLinks({locale}:{locale:Locale}) {
 const path=usePathname();const router=useRouter();
 return <div className="ed-languages" aria-label={locale==='en'?'Language':'语言'}>{(['en','zh'] as Locale[]).map(l=><Link key={l} lang={l==='zh'?'zh-CN':'en'} href={path.replace(/^\/(en|zh)(?=\/|$)/,`/${l}`)} aria-current={locale===l?'true':undefined} onClick={e=>{e.preventDefault();router.push(path.replace(/^\/(en|zh)(?=\/|$)/,`/${l}`)+window.location.search+window.location.hash);}}>{l==='en'?'English':'中文'}</Link>)}</div>;
}
const KEY='c33-reading-list-v1';
function readSaved():string[]{try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'):[];}catch{return [];}}
export function SaveButton({id,locale}:{id:string;locale:Locale}){
 const [saved,setSaved]=useState(false);const [error,setError]=useState(false);
 useEffect(()=>{setSaved(readSaved().includes(id));},[id]);
 return <><button aria-pressed={saved} onClick={()=>{try{const ids=readSaved();localStorage.setItem(KEY,JSON.stringify(saved?ids.filter(s=>s!==id):[...new Set([...ids,id])]));setSaved(!saved);setError(false);}catch{setError(true);}}}>{saved?(locale==='en'?'Saved ✓':'已收藏 ✓'):(locale==='en'?'Save for later +':'收藏文章 +')}</button>{error&&<span role="status">{locale==='en'?'Browser storage is unavailable.':'浏览器未允许本地存储。'}</span>}</>;
}
export function ArticleActions({id,locale}:{id:string;locale:Locale}){
 const [copied,setCopied]=useState('');return <div className="ed-actions"><SaveButton id={id} locale={locale}/><button onClick={()=>{navigator.clipboard.writeText(window.location.href).then(()=>setCopied(locale==='en'?'Link copied':'链接已复制')).catch(()=>setCopied(locale==='en'?'Copy the address from your browser.':'请复制浏览器地址栏中的链接。'));}}>{locale==='en'?'Copy link ↗':'复制链接 ↗'}</button><button onClick={()=>window.print()}>{locale==='en'?'Print / PDF':'打印／PDF'}</button><span role="status">{copied}</span></div>;
}
export function SavedList({items,locale}:{items:{id:string;title:string;href:string}[];locale:Locale}){
 const [ids,setIds]=useState<string[]|null>(null);useEffect(()=>setIds(readSaved()),[]);
 if(ids===null)return <p>{locale==='en'?'Loading your reading list…':'正在读取收藏…'}</p>;
 const saved=items.filter(x=>ids.includes(x.id));return <>{saved.length?<ul className="ed-saved-list">{saved.map(x=><li key={x.id}><Link href={x.href}>{x.title} ↗</Link><button onClick={()=>{const next=ids.filter(s=>s!==x.id);try{localStorage.setItem(KEY,JSON.stringify(next));setIds(next);}catch{}}}>{locale==='en'?'Remove':'移除'}</button></li>)}</ul>:<p>{locale==='en'?'No saved articles yet. Use “Save for later” on an article.':'还没有收藏文章。打开文章，点击“收藏文章”即可。'}</p>}</>;
}
