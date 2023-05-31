import { EB_Garamond, Roboto, Inter } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const inter = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const ebGaramond = EB_Garamond({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});
