"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navigation } from "@/components/layout/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Abrir navegacion"
      >
        <Menu className="size-4" />
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <ShieldCheck className="size-4" />
              </div>
              <span className="text-sm font-semibold">Atlas360 Secure</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Cerrar navegacion"
            >
              <X className="size-4" />
            </Button>
          </div>
          <nav className="grid gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-11 items-center gap-3 rounded-md px-3 text-sm hover:bg-secondary"
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
