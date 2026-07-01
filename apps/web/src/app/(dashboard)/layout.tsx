import { Bell, Search } from "lucide-react"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Sidebar } from "@/components/layout/sidebar"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
          <MobileNav />
          <div className="relative hidden w-full max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Buscar alertas, equipos, usuarios..." />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Notificaciones">
              <Bell className="size-4" />
            </Button>
            <ThemeToggle />
            <div className="hidden rounded-md border px-3 py-1.5 text-sm md:block">
              Andes Retail
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
