import { Injectable } from "@nestjs/common"

@Injectable()
export class OrganizationsService {
  list() {
    return [
      {
        id: "org-atlas-demo",
        name: "Andes Retail Group",
        slug: "andes-retail",
        plan: "Managed Security Enterprise",
        status: "active",
        protectedAssets: 486,
        users: 1280,
      },
      {
        id: "org-pacific-bank",
        name: "Pacific Bank",
        slug: "pacific-bank",
        plan: "Managed Security Plus",
        status: "onboarding",
        protectedAssets: 214,
        users: 620,
      },
    ]
  }
}
