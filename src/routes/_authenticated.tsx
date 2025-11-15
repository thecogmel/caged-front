import { Outlet, createFileRoute } from "@tanstack/react-router";

import { useCustomizer } from "@/context/customizer-context";
import { SidebarLayout } from "@/shared/components";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  const { activeLayout, isLayout } = useCustomizer();

  return (
    <div className="flex min-h-screen w-full">
      <div className="page-wrapper flex w-full">
        {/* Header/sidebar */}
        {activeLayout == "vertical" ? <SidebarLayout /> : null}
        <div className="body-wrapper dark:bg-dark w-full bg-white">
          {/* Top Header  */}
          {/*  {activeLayout == "horizontal" ? (
                <Header layoutType="horizontal" />
              ) : (
                <Header layoutType="vertical" />
              )} */}
          {/* Body Content  */}
          <div
            className={` ${
              isLayout == "full"
                ? "w-full px-5 py-[30px] md:px-[30px]"
                : "container mx-auto py-[30px]"
            } ${activeLayout == "horizontal" ? "xl:mt-3" : ""} `}
          >
            <Outlet />
          </div>
          //TODO - LIVE THEME CUSTOMIZER
          {/* <Customizer /> */}
        </div>
      </div>
    </div>
  );
}
