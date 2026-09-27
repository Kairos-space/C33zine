export type Locale='en'|'zh';
export type Pair={en:string;zh:string};
export type Category='fashion'|'culture'|'people';
export type Story={slug:string;category:Category;tag:string;date:string;dateLabel?:Pair;updated?:string;title:Pair;summary:Pair;author?:string;image?:string;alt?:Pair;credit?:Pair;original?:string;topic?:string;body:{en:string[];zh:string[]};sources:{label:string;url:string}[];gallery?:{src:string;alt:Pair}[];note?:Pair};
export const pick=(p:Pair,l:Locale)=>p[l];
export const categoryNames:Record<Category,Pair>={fashion:{en:'Fashion',zh:'时尚'},culture:{en:'Culture',zh:'文化'},people:{en:'People',zh:'人物'}};
export const dateText=(date:string,l:Locale)=>new Intl.DateTimeFormat(l==='en'?'en-GB':'zh-CN',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(date+'T12:00:00Z'));
