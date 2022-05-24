import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShipItem from "../ShipItem.vue";

describe("ShipItem", () => {
  it("renders properly", () => {
    const wrapper = mount(ShipItem, { props: { name: "Hello Test" } });
    expect(wrapper.text()).toContain("Hello Test");
  });
});
