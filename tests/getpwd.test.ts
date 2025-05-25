import { describe, it } from "node:test"
import assert from "node:assert"

import { getpwd } from "../src/index.ts"

describe("getpwd", () => {
  it("should return the correct password", () => {
    assert.ok(getpwd("04A03CAA1E7080") === "CD91AFCC", "Test 1 failed");
    assert.ok(getpwd("04112233445566") === "EC9805C8", "Test 2 failed");
  })

  it('should parse the uid correctly when it contains colons', () => {
    assert.ok(getpwd("04:A0:3C:AA:1E:70:80") === "CD91AFCC", "Test 1 failed");
    assert.ok(getpwd("04:11:22:33:44:55:66") === "EC9805C8", "Test 2 failed");
  })
})