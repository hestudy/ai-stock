import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  layout("layouts/authLayout.tsx", [
    layout("layouts/initDataLayout.tsx", [index("routes/dashboard.tsx")]),
  ]),
  route("/api/auth/*", "routes/api/auth.ts"),
  route("/api/initData", "routes/api/initData.ts"),
] satisfies RouteConfig;
