import type { DefaultSession } from "next-auth"
import type { Role } from "@atlas360/shared"

declare module "next-auth" {
  interface User {
    role: Role
    organizationId: string
    organizationSlug: string
  }

  interface Session {
    user: {
      id: string
      role: Role
      organizationId: string
      organizationSlug: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role
    organizationId?: string
    organizationSlug?: string
  }
}
