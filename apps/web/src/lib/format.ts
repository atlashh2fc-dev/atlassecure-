export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value))
}

export function severityLabel(value: string): string {
  const labels: Record<string, string> = {
    critical: "Critica",
    high: "Alta",
    medium: "Media",
    low: "Baja",
    informational: "Info",
  }
  return labels[value] ?? value
}
