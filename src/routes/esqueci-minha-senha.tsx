import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordPage } from "@/modules/public/forgot-password/containers";

export const Route = createFileRoute("/esqueci-minha-senha")({
  component: ForgotPasswordPage,
});
