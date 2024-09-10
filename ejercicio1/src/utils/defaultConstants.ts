declare global {
  interface Window {
    MAIN_API_URL: string;
    MAINT_MODE: boolean;
    MAIN_COLOR: string;
  }
}
export const EN_LANGUAGE = "EN";
export const constants = {
  // The default language to use when none is specified
  DEFAULT_LANGUAGE: EN_LANGUAGE,
  // The default backend url to use when none is specified
  DEFAULT_BACKEND_URL: `${window.MAIN_API_URL}/api`,
  MAINT_MODE: window.MAINT_MODE,
  MAIN_COLOR: window.MAIN_COLOR,
  palette: {
    pastelYellow: "#FFD700",
    pastelBlue: "#ADD8E6",
    pastelGreen: "#98FB98",
    pastelPink: "#FFB6C1",
    pastelPurple: "#9370DB",
    pastelOrange: "#FFA500",
  },
};
