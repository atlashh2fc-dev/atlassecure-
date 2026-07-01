import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-center">
      <div>
        <h1 className="text-2xl font-semibold">Pagina no encontrada</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          La ruta solicitada no existe en Atlas360 Secure.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Volver al dashboard</Link>
      </Button>
    </main>
  )
}
