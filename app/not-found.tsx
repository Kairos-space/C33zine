import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 md:px-10 py-24 md:py-40 text-center">
      <div className="font-display font-medium text-[120px] md:text-[220px] leading-[0.8] tracking-[-0.04em]">
        404
      </div>
      <p className="font-display italic text-[22px] md:text-[28px] mt-8">
        Page introuvable.
      </p>
      <p className="font-serif text-[15px] md:text-[16px] text-neutral-600 mt-3">
        此页面已不在编辑部档案中。
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-[11px] uppercase tracking-[0.18em]">
        <Link href="/" className="hover:underline underline-offset-4">
          Accueil
        </Link>
        <Link href="/issues" className="hover:underline underline-offset-4">
          Les numéros
        </Link>
        <Link href="/about" className="hover:underline underline-offset-4">
          About
        </Link>
      </div>
    </div>
  );
}
