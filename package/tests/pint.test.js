/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/pint";
const { pint } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of pint data", () => {
  it("pint data files returns object", () => {
    expect(pint).not.toBe("");
  });
});

try {
  describe("test pint json schema", () => {
    it("validates pint json schema", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
