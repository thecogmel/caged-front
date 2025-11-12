import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeModeScript, ThemeProvider } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "@/components/router-provider";
import { CustomizerContextProvider } from "@/context/customizerContext";
import "@/css/globals.css";
import { router } from "@/router";
import { queryClient } from "@/utils";
import customTheme from "@/utils/theme/custom-theme";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeModeScript />
    <ThemeProvider theme={customTheme}>
      <CustomizerContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider />
        </QueryClientProvider>
      </CustomizerContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
