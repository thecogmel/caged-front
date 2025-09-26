import { createFileRoute } from "@tanstack/react-router";

import Home from "@/modules/public/home/containers/home-page";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});
