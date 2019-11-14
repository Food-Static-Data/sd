/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/quart";
const { quart } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of quart data", () => {
  it("quart data files returns object", () => {
    expect(quart).not.toBe("");
  });
});

try {
  describe("testng for quart json data schema", () => {
    it("validates quart json-schema", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
