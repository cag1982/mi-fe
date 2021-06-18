import { Colors } from "./types";

export const baseColors = {
  failure: "#FF5555",
  primary: "#FFD293",
  primaryBright: "#FFDBB0",
  primaryDark: "#E5BB88",
  secondary: "#7F6AC4",
  success: "#62CCBC",
  warning: "#FFAA87",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#170358",
  backgroundDisabled: "#C4C4C4",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#7F6AC4",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#6E648E",
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
  backgroundDisabled: "#C4C4C4",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#7F6AC4",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#6E648E",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#453579",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #453579 0%, #240048 100%)",
  },
};
