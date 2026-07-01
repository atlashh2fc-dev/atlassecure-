import { Plus } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { organizations } from "@/lib/mock-data"

export default function ClientesPage() {
  return (
    <>
      <PageHeader
        title="Clientes"
        description="Administracion multiempresa con aislamiento por organizacion, plan y postura de seguridad."
        action={
          <Button>
            <Plus className="size-4" /> Nuevo cliente
          </Button>
        }
      />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Activos</TableHead>
                <TableHead>Usuarios</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {organizations.map((org) => (
                <TableRow key={org.id}>
                  <TableCell>
                    <div className="font-medium">{org.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">{org.slug}</div>
                  </TableCell>
                  <TableCell>{org.sector}</TableCell>
                  <TableCell className="font-mono">{org.score}</TableCell>
                  <TableCell>{org.assets}</TableCell>
                  <TableCell>{org.users}</TableCell>
                  <TableCell>
                    <Badge variant={org.status === "Activo" ? "success" : "warning"}>
                      {org.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
