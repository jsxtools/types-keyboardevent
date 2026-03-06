import { describe, expect, it } from "vitest";

describe("runtime entrypoints", () => {
	it("keeps the root entrypoint type-only at runtime", async () => {
		const module = await import("../src/types.ts");

		expect(Object.keys(module)).toEqual([]);
	});

	it("keeps the KeyboardEventCode entrypoint type-only at runtime", async () => {
		const module = await import("../src/KeyboardEventCode.ts");

		expect(Object.keys(module)).toEqual([]);
	});

	it("keeps the KeyboardEventKey entrypoint type-only at runtime", async () => {
		const module = await import("../src/KeyboardEventKey.ts");

		expect(Object.keys(module)).toEqual([]);
	});
});
