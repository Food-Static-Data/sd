/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/cup3_4";
const { cup34 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of cup3_4 data", () => {
  it("cup3_4 data files returns object", () => {
    expect(cup34).not.toBe("");
  });
});

try {
  describe("test cup3_4 json schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
