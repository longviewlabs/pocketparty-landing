import { ReactNode } from "react";

type PillProps = {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Pill({ icon, children, className }: PillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-secondary ${className ?? ""}`}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default Pill;


