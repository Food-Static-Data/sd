/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/quarterCup";
const { quaterCup } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of quaterCup data", () => {
  it("quaterCup data files returns object", () => {
    expect(quaterCup).not.toBe("");
  });
});

try {
  describe("test quarter cup json schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
