import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-black">
      <div className="flex items-center justify-between px-6 md:px-10 h-14">
        <Link
          href="/"
          className="font-sans font-semibold tracking-tight text-[15px]"
        >
          C33
        </Link>
        <nav className="flex items-center gap-8 text-[13px] font-sans uppercase tracking-[0.08em]">
          <Link href="/issue/01" className="hover:underline underline-offset-4">
            Issues
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
