import { IncidentsTable } from "@/components/dashboard/security-table"
import { PageHeader } from "@/components/layout/page-header"
import { incidents } from "@/lib/mock-data"

export default function IncidentesPage() {
  return (
    <>
      <PageHeader
        title="Incidentes"
        description="Casos de respuesta administrada con responsables, estados y tiempos de contencion."
      />
      <IncidentsTable items={incidents} />
    </>
  )
}
