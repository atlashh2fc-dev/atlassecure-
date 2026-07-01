import { VulnerabilitiesTable } from "@/components/dashboard/security-table"
import { PageHeader } from "@/components/layout/page-header"
import { vulnerabilities } from "@/lib/mock-data"

export default function VulnerabilidadesPage() {
  return (
    <>
      <PageHeader
        title="Vulnerabilidades"
        description="Priorizacion de exposiciones por CVSS, criticidad de activo y tendencia de explotacion."
      />
      <VulnerabilitiesTable items={vulnerabilities} />
    </>
  )
}
