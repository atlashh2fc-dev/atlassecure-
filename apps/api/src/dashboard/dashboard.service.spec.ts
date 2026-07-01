import { DashboardService } from "./dashboard.service"

describe("DashboardService", () => {
  it("returns a bounded security score", () => {
    const service = new DashboardService()
    const summary = service.getSummary({
      organizationId: "org-atlas-demo",
      organizationSlug: "atlas-demo",
      role: "CLIENT_ADMIN",
      userId: "user-demo-admin",
    })

    expect(summary.securityScore).toBeGreaterThanOrEqual(0)
    expect(summary.securityScore).toBeLessThanOrEqual(100)
  })
})
