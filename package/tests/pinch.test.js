/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/pinch";
const { pinch } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of pinch data", () => {
  it("pinch data files returns object", () => {
    expect(pinch).not.toBe("");
  });
});

try {
  describe("testng for pinch json data schema", () => {
    it("validates pinch json file schema", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
