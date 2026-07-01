import { existsSync } from "node:fs"
import { spawnSync } from "node:child_process"

const isCi = process.env.CI === "true" || process.env.VERCEL === "1"

if (isCi) {
  process.exit(0)
}

const huskyBin =
  process.platform === "win32" ? "node_modules/.bin/husky.cmd" : "node_modules/.bin/husky"

if (!existsSync(huskyBin)) {
  process.exit(0)
}

const result = spawnSync(huskyBin, { stdio: "inherit", shell: process.platform === "win32" })
process.exit(result.status ?? 0)
