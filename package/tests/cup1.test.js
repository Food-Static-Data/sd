/* global describe, it, expect */
"use strict";

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/cup1";
const { cup1 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of cup1 data", () => {
  it("cup1 data files returns object", () => {
    expect(cup1).not.toBe("");
  });
});

try {
  describe("test cup1 json schema", () => {
    it("validates my jason", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
