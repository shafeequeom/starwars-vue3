import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShipCard from "../ShipCard.vue";

describe("ShipCard", () => {
  it("renders properly", () => {
    const wrapper = mount(ShipCard, { props: { msg: "Hello Test" } });
    expect(wrapper.text()).toContain("Hello Test");
  });
});
