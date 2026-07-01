# Atlas360 Secure

Atlas360 Secure es la base de un SaaS multi-tenant de ciberseguridad administrada para empresas. El MVP está diseñado como producto comercial escalable, con frontend independiente en Next.js 15 y backend NestJS preparado para Docker y AWS Lightsail.

## Arquitectura

- `apps/web`: Next.js 15 App Router, TypeScript, Tailwind CSS 4, componentes estilo shadcn/ui, Auth.js y dark mode.
- `apps/api`: NestJS, Prisma ORM, PostgreSQL, RBAC, contratos de tenant y conectores desacoplados.
- `packages/shared`: tipos, roles, permisos, contratos de dashboard e interfaces de conectores compartidas.

## Capacidades incluidas

- Multiempresa desde el inicio mediante `organizationId`, `TenantContext`, membresías y RBAC.
- Roles: `SUPER_ADMIN`, `CLIENT_ADMIN`, `ANALYST`, `READ_ONLY`.
- Dashboard ejecutivo con Security Score, activos, alertas, vulnerabilidades, phishing, incidentes, MFA, backups y recomendaciones IA simuladas.
- Páginas: Clientes, Equipos, Usuarios, Alertas, Vulnerabilidades, Incidentes, Reportes, Configuración e Integraciones.
- Adaptadores mock para Wazuh, OpenSearch, GoPhish, n8n y OpenVAS/Greenbone.
- Prisma schema con modelos SaaS, seguridad e integración, más tablas compatibles con Auth.js.
- Docker y Docker Compose con PostgreSQL, API y Web.
- ESLint, Prettier, Husky, lint-staged y pruebas básicas.

## Requisitos

- Node.js 20.11 o superior
- npm 10 o superior
- Docker Desktop para levantar la pila completa

## Configuración local

```bash
cp .env.example .env
npm install
npm run prisma:generate --workspace @atlas360/api
npm run dev:api
npm run dev
```

Servicios por defecto:

- Web: `http://localhost:3000`
- API: `http://localhost:4000/api/v1`
- Swagger: `http://localhost:4000/docs`
- PostgreSQL: `localhost:5432`

## Vercel

Configure the Vercel project with Root Directory set to `apps/web`. The web app owns its Vercel config in `apps/web/vercel.json` and installs/builds from the monorepo root so workspace dependencies resolve correctly.

## Docker Compose

```bash
cp .env.example .env
docker compose up --build
```

El backend queda preparado para Lightsail usando `apps/api/Dockerfile`. En producción, usar secretos administrados para `DATABASE_URL`, `AUTH_SECRET`, claves de integraciones y credenciales de conectores.

## Contratos de integraciones

Las integraciones reales aún no están implementadas por diseño. Cada fuente debe añadirse como un adapter que implemente `SecurityDataConnector` desde `packages/shared`, manteniendo aislada la lógica de Wazuh, OpenSearch, GoPhish, n8n, OpenVAS/Greenbone o nuevos proveedores.

## Scripts principales

```bash
npm run dev
npm run dev:api
npm run build
npm run lint
npm run test
npm run format
```

## Siguientes hitos recomendados

1. Conectar Auth.js a PostgreSQL con `@auth/prisma-adapter`.
2. Implementar migraciones y seed multi-tenant.
3. Agregar row-level authorization en cada repositorio Prisma.
4. Implementar conectores reales detrás de los contratos mock.
5. Añadir colas para sincronización y reportes programados.
6. Incorporar auditoría, métricas, trazas y almacenamiento de evidencias.
