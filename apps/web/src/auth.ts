import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { Role } from "@atlas360/shared"

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Atlas360 Demo",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null
        }

        return {
          id: "user-demo-admin",
          name: "Mariana Soto",
          email: String(credentials.email),
          role: "CLIENT_ADMIN" satisfies Role,
          organizationId: "org-atlas-demo",
          organizationSlug: "andes-retail",
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.organizationId = user.organizationId
        token.organizationSlug = user.organizationSlug
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "user-demo-admin"
        session.user.role = token.role as Role
        session.user.organizationId = String(token.organizationId ?? "org-atlas-demo")
        session.user.organizationSlug = String(token.organizationSlug ?? "andes-retail")
      }
      return session
    },
  },
})
