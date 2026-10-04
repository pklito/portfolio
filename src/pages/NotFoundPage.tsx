import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center font-sans text-ink">
      <p className="font-mono text-xs uppercase">404 / Page not found</p>
      <h1 className="mt-6 text-6xl tracking-[-0.06em]">Nothing rendered here.</h1>
      <Link className="mt-10 border-b border-ink pb-2 font-mono text-xs uppercase" to="/">
        Return home
      </Link>
    </main>
  );
}
