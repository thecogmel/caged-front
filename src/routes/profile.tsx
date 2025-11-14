import { createFileRoute } from "@tanstack/react-router";

import { useCustomizer } from "@/context/customizer-context";
import { ProfileContainer } from "@/modules/profile/containers";
import BreadcrumbComp from "@/shared/components/breadcrum-comp";
import Sidebar from "@/shared/components/sidebar/Sidebar";

export const Route = createFileRoute("/profile")({
  component: () => {
    const { activeLayout, isLayout } = useCustomizer();

    const BCrumb = [
      {
        to: "/",
        title: "Home",
      },
      {
        title: "Account Setting",
      },
    ];

    return (
      <div className="flex min-h-screen w-full">
        <div className="page-wrapper flex w-full">
          {/* Header/sidebar */}
          {activeLayout == "vertical" ? <Sidebar /> : null}
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
              <BreadcrumbComp title="Account Setting" items={BCrumb} />
              <ProfileContainer />
            </div>
            //TODO - LIVE THEME CUSTOMIZER
            {/* <Customizer /> */}
          </div>
        </div>
      </div>
    );
  },
});
