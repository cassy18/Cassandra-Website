export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 border-b border-foreground/10">
        <ol className="flex gap-6">
          <li className="hover:underline hover:underline-offset-4"><a href="/">Home</a></li>
          <li className="hover:underline hover:underline-offset-4"><a href="/projects">Projects</a></li>
        </ol>
      </header>
    );
}
