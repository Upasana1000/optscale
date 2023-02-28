import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Infolob CloudMonk",
    brandUrl: "https://cloudmonk.infolob.com/",
    barSelectedColor: "#184286"
  }
)});
