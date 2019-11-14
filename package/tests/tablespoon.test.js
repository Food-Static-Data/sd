/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/tablespoon";
const { tablespoon1 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of tablespoon_1 data", () => {
  it("tablespoon_1 data files returns object", () => {
    expect(tablespoon1).not.toBe("");
  });
});

try {
  describe("test for tablespoon json schema", () => {
    it("validates tablespoon json schema", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
