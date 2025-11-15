import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/modules/private/profile/containers";

export const Route = createFileRoute("/_authenticated/perfil")({
  component: ProfilePage,
});
