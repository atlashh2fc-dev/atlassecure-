import type { AiRecommendation } from "@atlas360/shared"
import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Recommendations({ items }: { items: AiRecommendation[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          Recomendaciones IA
        </CardTitle>
        <CardDescription>Acciones priorizadas para reducir riesgo operativo.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-md border bg-background p-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium">{item.title}</p>
              <Badge
                variant={
                  item.priority === "urgent"
                    ? "destructive"
                    : item.priority === "high"
                      ? "warning"
                      : "secondary"
                }
              >
                {item.priority}
              </Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.rationale}</p>
            <p className="mt-2 text-xs text-primary">{item.estimatedImpact}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
