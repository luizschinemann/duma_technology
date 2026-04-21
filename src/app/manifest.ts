import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Duma Technology",
    short_name: "Duma",
    description: "Automação de processos e desenvolvimento de software sob medida.",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#FF9800",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
