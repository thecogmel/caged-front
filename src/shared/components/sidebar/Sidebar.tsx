import { Icon } from "@iconify/react";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import React from "react";
import SimpleBar from "simplebar-react";

import { useCustomizer } from "@/context/customizer-context";

import NavCollapse from "./NavCollapse";
import NavItems from "./NavItems";
import SidebarContent from "./Sidebaritems";

const SidebarLayout = () => {
  const { isCollapse } = useCustomizer();
  return (
    <>
      <div className="hidden xl:block">
        <div className="flex">
          <Sidebar
            className="menu-sidebar dark:bg-dark fixed z-[3] bg-white"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <SimpleBar className="h-[calc(100vh-180px)]">
              <SidebarItems
                className={`${isCollapse === "full-sidebar" ? "px-6" : "px-4"}`}
              >
                <SidebarItemGroup className="sidebar-nav">
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                      <h5 className="text-link dark:text-darklink caption text-xs font-bold">
                        <span className="hide-menu leading-21">
                          {item.heading?.toUpperCase()}
                        </span>
                        <Icon
                          icon="tabler:dots"
                          className="text-ld dark:text-opacity-60 hide-icon mx-auto block leading-6"
                          height={18}
                        />
                      </h5>

                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <div className="collpase-items">
                              <NavCollapse item={child} />
                            </div>
                          ) : (
                            <NavItems item={child} />
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </SidebarItemGroup>
              </SidebarItems>
            </SimpleBar>
            {/* Sidebar Profile */}
            {/* <div
              className={`my-4 ${isCollapse === "full-sidebar" ? "mx-6" : "mx-2"}`}
            >
              <div
                className={`py-4 ${isCollapse === "full-sidebar" ? "px-4" : "px-2"} bg-lightsecondary overflow-hidden rounded-md`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={"/images/profile/user-1.jpg"}
                      alt="profile-image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-base font-semibold">Mathew</h3>
                      <p className="text-muted dark:text-darklink text-xs font-normal">
                        Designer
                      </p>
                    </div>
                  </div>
                  <Tooltip content="Logout">
                    <div
                      className="cursor-pointer"
                      onClick={() => navigate({ to: "/" })}
                    >
                      <Icon
                        icon="tabler:power"
                        className="text-primary text-2xl"
                      />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div> */}
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
