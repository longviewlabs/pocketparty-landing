type StatProps = {
  k: string;
  v: string;
};

export function Stat({ k, v }: StatProps) {
  return (
    <div className="rounded-2xl border p-4 text-center shadow-sm">
      <div className="text-2xl font-semibold">{k}</div>
      <div className="text-sm text-muted-foreground">{v}</div>
    </div>
  );
}

export default Stat;


