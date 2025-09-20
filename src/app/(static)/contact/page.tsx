import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pocket Party - Get in Touch",
  description:
    "Have questions, feedback, or partnership ideas? Contact the Pocket Party team. We'd love to hear from you and help with your social gaming needs.",
  openGraph: {
    title: "Contact Pocket Party - Get in Touch",
    description:
      "Have questions, feedback, or partnership ideas? Contact the Pocket Party team. We'd love to hear from you and help with your social gaming needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pocket Party - Get in Touch",
    description:
      "Have questions, feedback, or partnership ideas? Contact the Pocket Party team. We'd love to hear from you and help with your social gaming needs.",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground">
        Have a question, feedback, or partnership idea? We’d love to hear from
        you.
      </p>
      <p className="text-muted-foreground">
        Reach out and we’ll get back as soon as we can.
      </p>
      <Link className="underline" href="/">
        Back to home
      </Link>
    </main>
  );
}
