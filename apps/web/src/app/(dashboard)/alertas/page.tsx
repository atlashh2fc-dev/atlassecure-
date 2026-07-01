import { AlertsTable } from "@/components/dashboard/security-table"
import { PageHeader } from "@/components/layout/page-header"
import { alerts } from "@/lib/mock-data"

export default function AlertasPage() {
  return (
    <>
      <PageHeader
        title="Alertas"
        description="Eventos normalizados desde SIEM, EDR, identidad y busquedas OpenSearch."
      />
      <AlertsTable items={alerts} />
    </>
  )
}
