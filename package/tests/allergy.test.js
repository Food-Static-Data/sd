/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/allergy";
const { allergies } = filesObjects;

expect.extend(matchers);

describe("tests for allergy", () => {
  it("allergies data files returns array", () => {
    expect(allergies).not.toBe("");
  });
});

try {
  describe("tests for allergy schema", () => {
    it("validates allergy json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
