import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Auto Dev Test",
  description: "Learn more about our company",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-6 bg-white dark:bg-slate-900 sm:items-start md:px-16">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          About Us
        </h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to our About page. We are a team dedicated to building
            amazing products and experiences.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Our mission is to deliver excellence and innovation in everything we
            do. Stay tuned for more updates about our company and team.
          </p>
        </div>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-slate-800 md:w-[158px]"
          href="/"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
