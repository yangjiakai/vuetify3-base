import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";

// import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    primary: "#344767",
    secondary: "#fcfbff",
    "secondary-darken-1": "#b08be6",
    "secondary-lighten-1": "#fff",
    accent: "#6386e1",
    content: "#333333",
    background: "#F8F9FA",
    error: "#ef476f",
    info: "#2196F3",
    success: "#06d6a0",
    warning: "#ffd166",
  },
};

const Darktheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#7295FE",
    secondary: "#2B2B49",
    "secondary-darken-1": "#1d1f33",
    "secondary-lighten-1": "#303052",
    surface: "#282843",
    title: "#C3C1D5",
    content: "#8381a7",
    accent: "#6386e1",
    error: "#e47171",
    info: "#24a6c5",
    background: "#1d1f33",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: Lighttheme,
      dark: Darktheme,
    },
  },
  defaults: {
    VBtn: {
      rounded: "md",
      flat: true,
      fontWeight: "400",
      letterSpacing: "0",
    },
    VCard: {
      flat: true,
      elevation: 1,
    },
  },
});
