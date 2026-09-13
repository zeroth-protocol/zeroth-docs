import { describe, expect, it } from "vitest";
import { secondaryPages } from "../lib/site-data";

describe("canonical website IA", () => {
  it("contains all approved top-level content routes", () => {
    expect(secondaryPages.map(p => p.slug)).toEqual(["protocol","povw","technology","economics","research","developers","ecosystem","governance"]);
  });
  it("keeps the canonical monetary ceiling", () => {
    const economics = secondaryPages.find(p => p.slug === "economics");
    expect(economics?.sections.some(s => s.title === "10,000,000,000")).toBe(true);
  });
});
