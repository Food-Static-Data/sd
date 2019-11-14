/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/gallon";
const { gallon } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of gallon data", () => {
  it("gallon data files returns object", () => {
    expect(gallon).not.toBe("");
  });
});

try {
  describe("test gallon json schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
