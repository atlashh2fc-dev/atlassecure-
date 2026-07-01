import { Injectable } from "@nestjs/common"

@Injectable()
export class UsersService {
  list() {
    return [
      {
        id: "usr-001",
        name: "Mariana Soto",
        email: "mariana.soto@andesretail.example",
        role: "CLIENT_ADMIN",
        mfaEnabled: true,
        riskScore: 12,
      },
      {
        id: "usr-002",
        name: "Tomas Fuentes",
        email: "tomas.fuentes@andesretail.example",
        role: "ANALYST",
        mfaEnabled: true,
        riskScore: 18,
      },
      {
        id: "usr-003",
        name: "Valentina Perez",
        email: "valentina.perez@andesretail.example",
        role: "READ_ONLY",
        mfaEnabled: false,
        riskScore: 67,
      },
    ]
  }
}
