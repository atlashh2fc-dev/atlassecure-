"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <div>
        <h2 className="text-xl font-semibold">No se pudo cargar la vista</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          El error fue registrado para diagnostico centralizado.
        </p>
      </div>
      <Button onClick={reset}>Reintentar</Button>
    </div>
  )
}
