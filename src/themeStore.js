import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: {
    palette: {
      primary: {
        main: "#AAC8A7",
      },
      secondary: {
        main: "#0066ff",
      },
      mode: "light",
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: "Inter",
    },
    direction: "ltr",
  },
  toggleMode: () =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          mode: state.theme.palette.mode === "light" ? "dark" : "light",
        },
      },
    })),
  setPrimaryColor: (color) =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          primary: {
            main: color,
          },
        },
      },
    })),
  setSecondaryColor: (color) =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          secondary: {
            main: color,
          },
        },
      },
    })),
  setFontFamily: (fontFamily) =>
    set((state) => ({
      theme: {
        ...state.theme,
        typography: {
          fontFamily,
        },
      },
    })),
  setBorderRadius: (borderRadius) =>
    set((state) => ({
      theme: {
        ...state.theme,
        shape: {
          borderRadius,
        },
      },
    })),
  toggleDirection: () =>
    set((state) => ({
      theme: {
        ...state.theme,
        direction: state.theme.direction === "ltr" ? "rtl" : "ltr",
      },
    })),
}));
