import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type FeatureProps = {
  icon: ReactNode;
  title: string;
  body: string;
};

export function Feature({ icon, title, body }: FeatureProps) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        {icon}
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

export default Feature;


