import Main from "routes/Main";

export const ROUTE_TYPE_REDIRECT = "redirect";
export const ROUTE_BASE_PATH = "/";

export const ROUTE_PATH = Object.freeze({
  BASE: ROUTE_BASE_PATH,
  MAIN: "/home",
  ERROR: "/error",
});

export const routes = [
  {
    type: ROUTE_TYPE_REDIRECT,
    from: ROUTE_BASE_PATH,
    to: ROUTE_PATH.MAIN,
    exact: true,
  },
  {
    path: ROUTE_PATH.MAIN,
    component: Main,
    exact: false,
    ignoreSession: false,
    header: true,
    navBar: true,
  },
  {
    type: ROUTE_TYPE_REDIRECT,
    from: "",
    to: `${ROUTE_PATH.ERROR}/404`,
    exact: false,
  },
];
