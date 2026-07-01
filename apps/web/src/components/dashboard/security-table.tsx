import type { SecurityAlert, Vulnerability, Incident } from "@atlas360/shared"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDateTime, severityLabel } from "@/lib/format"

function severityVariant(severity: string) {
  if (severity === "critical") return "destructive" as const
  if (severity === "high") return "warning" as const
  return "secondary" as const
}

export function AlertsTable({ items }: { items: SecurityAlert[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alertas recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alerta</TableHead>
              <TableHead>Severidad</TableHead>
              <TableHead>Activo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Detectada</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant={severityVariant(item.severity)}>
                    {severityLabel(item.severity)}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-xs">{item.assetName}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDateTime(item.detectedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export function VulnerabilitiesTable({ items }: { items: Vulnerability[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vulnerabilidades priorizadas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CVE</TableHead>
              <TableHead>Descripcion</TableHead>
              <TableHead>CVSS</TableHead>
              <TableHead>Activos</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs">{item.cve}</TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant={severityVariant(item.severity)}>{item.cvss.toFixed(1)}</Badge>
                </TableCell>
                <TableCell>{item.affectedAssets}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export function IncidentsTable({ items }: { items: Incident[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incidentes recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Incidente</TableHead>
              <TableHead>Severidad</TableHead>
              <TableHead>Responsable</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Actualizado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant={severityVariant(item.severity)}>
                    {severityLabel(item.severity)}
                  </Badge>
                </TableCell>
                <TableCell>{item.assignee}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDateTime(item.updatedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
