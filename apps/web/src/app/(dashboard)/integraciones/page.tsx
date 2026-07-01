import { Cable, CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { integrations } from "@/lib/mock-data"

export default function IntegracionesPage() {
  return (
    <>
      <PageHeader
        title="Integraciones"
        description="Conectores desacoplados para Wazuh, OpenSearch, GoPhish, n8n, OpenVAS/Greenbone y futuras fuentes."
        action={
          <Button>
            <Cable className="size-4" /> Nuevo conector
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>{integration.name}</CardTitle>
                  <CardDescription className="mt-1">Adapter ID: {integration.id}</CardDescription>
                </div>
                <Badge variant="secondary">{integration.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {integration.capabilities.map((capability) => (
                  <Badge key={capability} variant="outline">
                    {capability}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                <span>Contrato mock activo</span>
                <CheckCircle2 className="size-4 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
