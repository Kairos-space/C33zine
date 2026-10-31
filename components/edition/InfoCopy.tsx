import fs from 'fs';
import path from 'path';
import type {Locale} from '@/lib/edition/types';

/** Renders content/pages/<name>.<locale>.md (h1 / ## / - lists / line breaks).
 *  Bracketed text such as [FOUNDER NAME] is shown as a highlighted placeholder. */
function inline(s:string,k:string){return s.split(/(\[[^\]]+\]\(mailto:[^)]+\)|\[[^\]]+\])/).map((p,i)=>{const email=p.match(/^\[([^\]]+)\]\((mailto:[^)]+)\)$/);if(email)return <a key={k+i} href={email[2]}>{email[1]}</a>;return /^\[.*\]$/.test(p)?<mark key={k+i} className="ed-placeholder">{p}</mark>:p;});}
export function InfoCopy({l,name,kicker}:{l:Locale;name:string;kicker:string}){
  const src=fs.readFileSync(path.join(process.cwd(),'content/pages',`${name}.${l}.md`),'utf8').trim();
  const blocks=src.split(/\n\s*\n/);const title=blocks[0].replace(/^#\s*/,'');
  const body=blocks.slice(1).map((b,i)=>{
    if(b.startsWith('## '))return <h2 key={i}>{b.slice(3)}</h2>;
    const lines=b.split('\n');
    if(lines.every(x=>x.startsWith('- ')))return <ul key={i} className="ed-info-list">{lines.map((x,j)=><li key={j}>{inline(x.slice(2),`${i}-${j}-`)}</li>)}</ul>;
    return <p key={i} className={i===0&&name==='about'?'ed-intro':undefined}>{lines.map((x,j)=><span key={j}>{j>0&&<br/>}{inline(x,`${i}-${j}-`)}</span>)}</p>;
  });
  return <><header className="ed-page-title"><div className="ed-kicker">{kicker}</div><h1>{title}</h1></header><div className="ed-prose ed-info">{body}{name==='about'&&<p><a href={`/${l}/masthead`}>{l==='en'?'Masthead':'版权页'}</a> · <a href={`/${l}/letter`}>{l==='en'?'Letter from the editor':'编者的信'}</a></p>}</div></>;
}
