"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function RootChrome({children,nav,footer}:{children:React.ReactNode;nav:React.ReactNode;footer:React.ReactNode}) {
 const path=usePathname(); const locale=path.split('/')[1]; const modern=locale==='en'||locale==='zh';
 useEffect(()=>{document.documentElement.lang=modern?(locale==='zh'?'zh-CN':'en'):'fr';},[modern,locale]);
 return modern?<>{children}</>:<div className="legacy-shell min-h-screen flex flex-col">{nav}<main className="flex-1">{children}</main>{footer}</div>;
}
