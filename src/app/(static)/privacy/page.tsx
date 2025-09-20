import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pocket Party Data Protection",
  description:
    "Learn about Pocket Party's privacy practices. We collect only what's necessary to run the app and never sell your data. Your privacy matters to us.",
  openGraph: {
    title: "Privacy Policy - Pocket Party Data Protection",
    description:
      "Learn about Pocket Party's privacy practices. We collect only what's necessary to run the app and never sell your data. Your privacy matters to us.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Pocket Party Data Protection",
    description:
      "Learn about Pocket Party's privacy practices. We collect only what's necessary to run the app and never sell your data. Your privacy matters to us.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">Privacy</h1>
      <p className="text-muted-foreground">
        Your privacy matters. Pocket Party collects only what is necessary to
        run the app.
      </p>
      <p className="text-muted-foreground">
        We never sell your data. Read this page to learn more about our
        practices.
      </p>
      <Link className="underline" href="/">
        Back to home
      </Link>
    </main>
  );
}
