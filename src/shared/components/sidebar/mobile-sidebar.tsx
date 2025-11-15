import { Icon } from "@iconify/react";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import React from "react";
import SimpleBar from "simplebar-react";

import { NavCollapse, NavItems, SidebarContent } from ".";

export function MobileSidebar() {
  /* const { selectedIconId } = useCustomizer();

  const selectedContent = SidebarContent.find(
    (data) => data.id === selectedIconId,
  ); */
  return (
    <>
      <div className="flex">
        <Sidebar
          className="menu-sidebar dark:bg-dark fixed z-[10] bg-white pt-0"
          aria-label="Sidebar with multi-level dropdown example"
        >
          <SimpleBar className="h-[calc(100vh_-_170px)]">
            <SidebarItems className={`px-6`}>
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
          {/* <div className={`mx-6 my-4`}>
            <div
              className={`bg-lightsecondary overflow-hidden rounded-md px-4 py-4`}
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
                  <div className="cursor-pointer">
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
    </>
  );
}
