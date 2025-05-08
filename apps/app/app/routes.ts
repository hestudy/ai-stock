import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  layout("layouts/authLayout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
