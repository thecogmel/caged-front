import { createFileRoute } from "@tanstack/react-router";

import { DashboardPage } from "@/modules/private/dashboard/containers";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});
