import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFD293",
  primaryBright: "#FFDBB0",
  primaryDark: "#E5BB88",
  secondary: "#170358",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#170358",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#453579",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #453579 0%, #240048 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#170358",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#453579",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #453579 0%, #240048 100%)",
  },
};
