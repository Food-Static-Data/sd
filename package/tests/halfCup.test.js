/* global describe, it, expect */
"use strict";
// maybe import only object that we need, not all of them? @TODO

import { filesObjects } from "@utils";
import { matchers } from "jest-json-schema";
import { schema, example } from "./examples/halfCup";
const { cup12 } = filesObjects;

expect.extend(matchers);

describe("this test prevents to any issues and problems, also to break the structure of cup1_2 data", () => {
  it("cup1_2 data files returns object", () => {
    expect(cup12).not.toBe("");
  });
});

try {
  describe("tests halfCup json schema", () => {
    it("validates my json", () => {
      expect(example).toMatchSchema(schema);
    });
  });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
