import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FilmItem from "../FilmItem.vue";

describe("ShipCard", () => {
  it("renders properly", () => {
    const wrapper = mount(FilmItem, { props: { title: "Hello Test" } });
    expect(wrapper.text()).toContain("Hello Test");
  });
});
