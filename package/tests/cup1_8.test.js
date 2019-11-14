/* global describe, it, expect */
"use strict";
import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/cup1_8";
const { cup18 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of cup1_8 data", () => {
  it("cup1_8 data files returns object", () => {
    expect(cup18).not.toBe("");
  });
});

try {
  describe("test cup1_8 json schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
