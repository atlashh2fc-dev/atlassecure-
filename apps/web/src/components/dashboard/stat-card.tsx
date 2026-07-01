import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  tone = "neutral",
}: {
  title: string
  value: string
  change: string
  icon: LucideIcon
  tone?: "neutral" | "good" | "warning" | "danger"
}) {
  const tones = {
    neutral: "text-primary",
    good: "text-emerald-500",
    warning: "text-amber-500",
    danger: "text-red-500",
  }

  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 font-mono text-2xl font-semibold tracking-normal">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{change}</p>
        </div>
        <div className={cn("rounded-md border bg-secondary p-2", tones[tone])}>
          <Icon className="size-4" />
        </div>
      </CardContent>
    </Card>
  )
}
