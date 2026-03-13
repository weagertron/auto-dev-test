import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Auto Dev Test",
  description: "Get in touch with our team",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-6 bg-white dark:bg-black sm:items-start md:px-16">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Contact Us
        </h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;d love to hear from you! Reach out to us through any of the
            channels below.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-semibold text-black dark:text-zinc-50">Email:</span>
              <a
                href="mailto:contact@example.com"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              >
                contact@example.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-semibold text-black dark:text-zinc-50">Phone:</span>
              <a
                href="tel:+1-555-123-4567"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <span className="font-semibold text-black dark:text-zinc-50">Address:</span>
              <address className="text-zinc-600 dark:text-zinc-400 not-italic">
                123 Main Street, Suite 100<br />
                San Francisco, CA 94105<br />
                United States
              </address>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-semibold text-black dark:text-zinc-50">Hours:</span>
              <span className="text-zinc-600 dark:text-zinc-400">
                Monday - Friday, 9:00 AM - 5:00 PM PST
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Back to Home
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/about"
          >
            About Us
          </Link>
        </div>
      </main>
    </div>
  );
}
