import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground">
        Have a question, feedback, or partnership idea? We’d love to hear from you.
      </p>
      <p className="text-muted-foreground">
        Reach out and we’ll get back as soon as we can.
      </p>
      <Link className="underline" href="/">Back to home</Link>
    </main>
  );
}


