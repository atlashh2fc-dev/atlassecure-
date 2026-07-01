import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDateTime } from "@/lib/format"
import { assets } from "@/lib/mock-data"

export default function EquiposPage() {
  return (
    <>
      <PageHeader
        title="Equipos"
        description="Inventario de endpoints, servidores y activos perimetrales protegidos."
      />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hostname</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>SO</TableHead>
                <TableHead>Exposicion</TableHead>
                <TableHead>Agente</TableHead>
                <TableHead>Ultima senal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="font-mono text-xs">{asset.hostname}</TableCell>
                  <TableCell>{asset.owner}</TableCell>
                  <TableCell>{asset.os}</TableCell>
                  <TableCell>{asset.exposure}</TableCell>
                  <TableCell>
                    <Badge variant={asset.agentStatus === "healthy" ? "success" : "warning"}>
                      {asset.agentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDateTime(asset.lastSeenAt)}
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
