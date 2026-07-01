import { Download, FileText } from "lucide-react"
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
import { reports } from "@/lib/mock-data"

export default function ReportesPage() {
  return (
    <>
      <PageHeader
        title="Reportes"
        description="Reportes ejecutivos, cumplimiento y resiliencia listos para clientes y directorios."
        action={
          <Button>
            <FileText className="size-4" /> Crear reporte
          </Button>
        }
      />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reporte</TableHead>
                <TableHead>Periodo</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Accion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell>{report.period}</TableCell>
                  <TableCell>{report.owner}</TableCell>
                  <TableCell>
                    <Badge variant={report.status === "Listo" ? "success" : "secondary"}>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="size-4" /> Exportar
                    </Button>
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
