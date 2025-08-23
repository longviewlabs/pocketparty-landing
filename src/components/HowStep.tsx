type HowStepProps = {
  num: number;
  title: string;
  body: string;
};

export function HowStep({ num, title, body }: HowStepProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm bg-card">
      <div className="text-sm text-muted-foreground mb-1">Step {num}</div>
      <div className="text-lg font-semibold mb-1">{title}</div>
      <p className="text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

export default HowStep;


