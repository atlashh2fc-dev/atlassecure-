import {
  AlertTriangle,
  DatabaseBackup,
  Fish,
  Server,
  ShieldAlert,
  ShieldCheck,
  UserRoundX,
  Users,
} from "lucide-react"
import { Recommendations } from "@/components/dashboard/recommendations"
import { SecurityScore } from "@/components/dashboard/security-score"
import { AlertsTable, IncidentsTable } from "@/components/dashboard/security-table"
import { StatCard } from "@/components/dashboard/stat-card"
import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { alerts, incidents, recommendations, summary } from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Resumen ejecutivo"
        description="Postura consolidada de seguridad para Andes Retail Group, actualizada con datos normalizados desde conectores administrados."
        action={<Badge variant="success">SOC administrado activo</Badge>}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Equipos protegidos"
          value={String(summary.protectedAssets)}
          change="+18 este mes"
          icon={Server}
        />
        <StatCard
          title="Alertas criticas"
          value={String(summary.criticalAlerts)}
          change="2 requieren decision"
          icon={ShieldAlert}
          tone="danger"
        />
        <StatCard
          title="Vulnerabilidades"
          value={String(summary.openVulnerabilities)}
          change="-14% vs semana anterior"
          icon={AlertTriangle}
          tone="warning"
        />
        <StatCard
          title="Campanas phishing"
          value={String(summary.phishingCampaigns)}
          change="1 en ejecucion"
          icon={Fish}
        />
        <StatCard
          title="Incidentes recientes"
          value={String(summary.recentIncidents)}
          change="5 contenidos"
          icon={ShieldCheck}
          tone="good"
        />
        <StatCard
          title="Usuarios en riesgo"
          value={String(summary.riskyUsers)}
          change="3 privilegiados"
          icon={UserRoundX}
          tone="warning"
        />
        <StatCard
          title="Cumplimiento MFA"
          value={`${summary.mfaCompliance}%`}
          change="Meta 98%"
          icon={Users}
          tone="good"
        />
        <StatCard
          title="Estado respaldos"
          value={`${summary.backupHealth}%`}
          change="2 jobs degradados"
          icon={DatabaseBackup}
          tone="good"
        />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[380px_1fr]">
        <div className="space-y-6">
          <SecurityScore score={summary.securityScore} />
          <Recommendations items={recommendations} />
        </div>
        <div className="space-y-6">
          <AlertsTable items={alerts} />
          <IncidentsTable items={incidents} />
        </div>
      </div>
    </>
  )
}
