import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "./components/router-provider";
import "./index.css";
import { router } from "./router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
);
