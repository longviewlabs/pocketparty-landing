type GameTileProps = {
  title: string;
  body: string;
};

export function GameTile({ title, body }: GameTileProps) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-card">
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

export default GameTile;


