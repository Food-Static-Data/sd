/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/teaspoon";
const { teaspoon1 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of teaspoon_1 data", () => {
  it("teaspoon_1 data files returns object", () => {
    expect(teaspoon1).not.toBe("");
  });
});

try {
  describe("testng for teaspoon json data schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
