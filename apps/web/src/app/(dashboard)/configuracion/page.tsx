import { KeyRound, Lock, ShieldCheck, Users } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const settings = [
  {
    title: "Organizacion",
    description: "Datos comerciales y tenant activo para aislamiento de datos.",
    icon: ShieldCheck,
    value: "Andes Retail Group",
  },
  {
    title: "Roles y permisos",
    description: "Super Admin, Cliente Admin, Analista y Solo Lectura con RBAC centralizado.",
    icon: Users,
    value: "4 roles activos",
  },
  {
    title: "Politicas MFA",
    description: "Requerimiento de MFA por rol, riesgo y acceso administrativo.",
    icon: Lock,
    value: "94% cumplimiento",
  },
  {
    title: "API Keys",
    description: "Credenciales rotables para conectores y automatizaciones externas.",
    icon: KeyRound,
    value: "3 llaves activas",
  },
]

export default function ConfiguracionPage() {
  return (
    <>
      <PageHeader
        title="Configuracion"
        description="Controles de tenant, seguridad, autenticacion y gobierno operacional."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {settings.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="size-4 text-primary" />
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <Badge variant="secondary">{item.value}</Badge>
              <Button variant="outline" size="sm">
                Configurar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Variables operativas</CardTitle>
          <CardDescription>
            Valores simulados preparados para mover a secretos administrados.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <Input value="https://api.atlas360.local" readOnly />
          <Input value="org-atlas-demo" readOnly />
          <Input value="CLIENT_ADMIN" readOnly />
        </CardContent>
      </Card>
    </>
  )
}
