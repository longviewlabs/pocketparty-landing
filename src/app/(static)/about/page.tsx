import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-muted-foreground">
        Pocket Party is a playful platform designed to make gatherings effortless and fun.
      </p>
      <p className="text-muted-foreground">
        Our mission is simple: bring people together with fast, accessible games on any phone.
      </p>
      <Link className="underline" href="/">Back to home</Link>
    </main>
  );
}


