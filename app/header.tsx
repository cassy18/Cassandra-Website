import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex justify-between items-center p-6 border-b border-foreground/10">
      <ol className="flex gap-6">
        <li className={`p-2 hover:underline ${isActive('/') ? 'rounded bg-[var(--primary)] font-bold border border-[var(--tertiary)]' : 'border border-[var(--tertiary)] rounded'}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`p-2 hover:underline hover:underline-offset-4 ${isActive('/projects') ? 'rounded bg-[var(--primary)] font-bold border border-[var(--tertiary)]' : 'border border-[var(--tertiary)] rounded'}`}>
          <Link href="/projects">Projects</Link>
        </li>
      </ol>
    </header>
  );
}
