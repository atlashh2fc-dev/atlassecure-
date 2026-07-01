import {
  AlertTriangle,
  BarChart3,
  Building2,
  FileText,
  LayoutDashboard,
  Plug,
  Server,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react"

export const navigation = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clientes", label: "Clientes", icon: Building2 },
  { href: "/equipos", label: "Equipos", icon: Server },
  { href: "/usuarios", label: "Usuarios", icon: Users },
  { href: "/alertas", label: "Alertas", icon: ShieldAlert },
  { href: "/vulnerabilidades", label: "Vulnerabilidades", icon: AlertTriangle },
  { href: "/incidentes", label: "Incidentes", icon: BarChart3 },
  { href: "/reportes", label: "Reportes", icon: FileText },
  { href: "/integraciones", label: "Integraciones", icon: Plug },
  { href: "/configuracion", label: "Configuracion", icon: Settings },
] as const
