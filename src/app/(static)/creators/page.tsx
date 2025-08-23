import Link from "next/link";

export default function CreatorsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">Creators</h1>
      <p className="text-muted-foreground">
        We partner with creators to bring fresh games and community events to Pocket Party.
      </p>
      <p className="text-muted-foreground">
        Interested in collaborating? Get in touch and let’s build something fun together.
      </p>
      <Link className="underline" href="/">Back to home</Link>
    </main>
  );
}


