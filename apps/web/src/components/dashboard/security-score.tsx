import { ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SecurityScore({ score }: { score: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" />
          Security Score
        </CardTitle>
        <CardDescription>
          Postura consolidada por activos, identidad, vulnerabilidades e incidentes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-3">
          <span className="font-mono text-5xl font-semibold tracking-normal">{score}</span>
          <span className="pb-2 text-sm text-muted-foreground">/100</span>
        </div>
        <Progress value={score} className="mt-5" />
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          <div>
            <p className="font-mono font-medium">94%</p>
            <p className="text-muted-foreground">MFA</p>
          </div>
          <div>
            <p className="font-mono font-medium">91%</p>
            <p className="text-muted-foreground">Backups</p>
          </div>
          <div>
            <p className="font-mono font-medium">37</p>
            <p className="text-muted-foreground">Vulns</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
