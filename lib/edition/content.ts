import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {cache} from 'react';
import {stories as edited} from './stories';
import {archiveLabels,journalChinese,journalChineseSummary} from './archive-labels';
import type {Category,Story,Locale} from './types';
export type ArchiveItem={slug:string;type:string;date:string;title:{en:string;zh:string};summary:{en:string;zh:string};category:Category;original:string;author?:string;body:string;image?:string;missingCover:boolean;fullTranslation?:string};
export const getArchive=cache(():ArchiveItem[]=>['articles','journal'].flatMap(type=>fs.readdirSync(path.join(process.cwd(),'content',type)).filter(f=>f.endsWith('.mdx')).map(file=>{
 const {data:d,content}=matter(fs.readFileSync(path.join(process.cwd(),'content',type,file),'utf8'));
 const slug=file.replace('.mdx',''); const [en,summary,category]=archiveLabels[slug];
 const zhBlock=content.match(/<div lang="zh-CN">([\s\S]*?)<\/div>/);
 return {slug,type,date:String(d.date||''),title:{en,zh:type==='journal'?journalChinese[slug]:d.title},summary:{en:summary,zh:d.excerpt&&type==='articles'?d.excerpt:journalChineseSummary[slug]},category:category as Category,original:`/${type==='articles'?'article':'journal'}/${slug}`,author:d.author,body:zhBlock?.[1]||content,image:d.cover,missingCover:!!d.cover&&!fs.existsSync(path.join(process.cwd(),'public',d.cover)),fullTranslation:slug==='le-reflux-du-quiet-luxury'?'after-quiet-luxury':slug==='deux-vitrines-paris-shanghai'?'two-windows':undefined};
})).sort((a,b)=>b.date.localeCompare(a.date)));
const translations=[{
 original:'le-reflux-du-quiet-luxury',slug:'after-quiet-luxury',category:'fashion' as Category,title:{en:'After quiet luxury',zh:'静奢之后'},summary:{en:'When clothes stop whispering, the question of distinction remains.',zh:'当衣服不再低声说话，关于区隔的问题仍在。'},
 en:[
 'Let us be clear about what quiet luxury was: not modesty, but snobbery with impeccable manners. Distinction without visible evidence; anonymous cashmere; a cut reserved for those who already knew. In other words, a password, and the satisfaction of holding the key. We praised it as taste. First, it was a boundary, drawn more politely than usual.',
 'Its retreat is no tragedy. What returns is not the vulgarity of the logo, but the right to be legible: to wear something that can be seen, named and shared. After several seasons of whispering among themselves, clothes are learning to speak aloud again. There is something to welcome in that.',
 'One reservation remains. Fashion never gives up hierarchy; it changes its grammar. The whisper had a price of admission, and the clamour will have one too. Be wary of anyone selling the end of ostentation: what comes next is almost always more expensive.'
 ]
},{original:'deux-vitrines-paris-shanghai',slug:'two-windows',category:'culture' as Category,title:{en:'Two windows, two ways of speaking',zh:'两扇橱窗，两种表达'},summary:{en:'One window assumes a shared memory; another tells a story. A commentary on how luxury addresses its audience.',zh:'一扇橱窗假定观众已经了解，另一扇选择讲述。两种面对观众的方式。'},
 en:[
 'In Paris, the shop window practises understatement. A bag on a plinth, light falling at a low angle, a monogram reduced to a whisper. The house does not explain; it assumes. This is a real elegance—and sometimes the comfort of a story that no longer needs writing, because someone else has already written it.',
 'In Shanghai, the same house chooses to make its case. Craft is displayed, history is told, the work of the hand is made visible. This is not the embarrassment of a market unsure of itself, but a culture that prefers to show rather than imply, to pass on rather than presume. A window that takes the trouble to address you may, after all, be treating you with greater respect.',
 'Put simply, these are two equally valid grammars of desire: one relies on memory, the other on sharing. If we want to see where luxury’s story is being rewritten, we might look at the window that still speaks—not because it has something to prove, but because it still has something to say.'
 ]
}];
export const getStories=cache(():Story[]=>[...edited,...translations.map(t=>{
 const a=getArchive().find(a=>a.slug===t.original)!;
 const cityEssay=t.slug==='two-windows';
 return {slug:t.slug,category:t.category,tag:'VIEW',date:a.date,updated:'2026-09-26',title:t.title,summary:t.summary,original:a.original,body:{en:t.en,zh:a.body.trim().split(/\n\s*\n/)},sources:[{label:'C33 · First published version / 首次发表版本',url:a.original}],note:cityEssay?{en:'This commentary reflects an editorial view of two displays, not a survey of either city. The first-published version has no individual byline.',zh:'本文讨论两种橱窗表达，并非对两座城市的调查；首次发表页面未标注个人作者。'}:{en:'This commentary was first published on the date shown above. It is not a current market report. The first-published version has no individual byline.',zh:'本文为评论，所示日期为首次发表日期，并非当下市场报道；首次发表页面未标注个人作者。'}};
})]);
export function storyHref(s:Story,l:Locale){return `/${l}/read/${s.slug}`;}
