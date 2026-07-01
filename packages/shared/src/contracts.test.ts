import assert from "node:assert/strict"
import { ROLES, roleHasPermission } from "./index.ts"

assert.equal(ROLES.length, 4)
assert.equal(roleHasPermission("SUPER_ADMIN", "integrations:write"), true)
assert.equal(roleHasPermission("READ_ONLY", "integrations:write"), false)
