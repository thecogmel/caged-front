import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@/modules/public/login/containers";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});
