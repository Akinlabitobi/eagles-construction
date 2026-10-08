import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink px-4 pt-20 text-center text-white">
      <div>
        <p className="font-display text-8xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">This page is still under construction.</h1>
        <p className="mt-3 text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-brand-500 px-7 py-3.5 font-semibold hover:bg-brand-400">
          Back to home
        </Link>
      </div>
    </section>
  );
}
