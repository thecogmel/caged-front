import { Icon } from "@iconify/react";
import { useLocation } from "@tanstack/react-router";
import { SidebarCollapse, SidebarItemGroup } from "flowbite-react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import NavItems from "../NavItems";
import { ChildItem } from "../Sidebaritems";

interface NavCollapseProps {
  item: ChildItem;
}

const NavCollapse: React.FC<NavCollapseProps> = ({ item }) => {
  const { pathname } = useLocation();
  const activeDD = item.children?.find((t) => t.url === pathname);
  return (
    <>
      <SidebarCollapse
        label={`${item.name}`}
        open={activeDD ? true : false}
        // Only render icon if it exists
        icon={() =>
          item.icon ? (
            <Icon icon={item.icon} height={21} className="my-0.5" />
          ) : null
        }
        className={`${activeDD ? "bg-primary hover:bg-primary dark:hover:bg-primary !text-white hover:text-white dark:hover:text-white" : ""} collapse-menu`}
        renderChevronIcon={(theme, open) => {
          const IconComponent = open
            ? HiOutlineChevronDown
            : HiOutlineChevronDown;
          return (
            <IconComponent
              aria-hidden
              className={`${twMerge(theme.label.icon.open[open ? "on" : "off"])} drop-icon`}
            />
          );
        }}
      >
        {/* Render child items */}
        {item.children && (
          <SidebarItemGroup className="sidebar-dropdown">
            {item.children.map((child) => (
              <React.Fragment key={child.id}>
                {/* Render NavItems for child items */}
                {child.children ? (
                  <NavCollapse item={child} /> // Recursive call for nested collapse
                ) : (
                  <NavItems item={child} />
                )}
              </React.Fragment>
            ))}
          </SidebarItemGroup>
        )}
      </SidebarCollapse>
    </>
  );
};

export default NavCollapse;
