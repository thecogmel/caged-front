import { Icon } from "@iconify/react";
import { useLocation } from "@tanstack/react-router";
import { SidebarItem } from "flowbite-react";

import { ChildItem } from "./sidebar-content";

interface NavItemsProps {
  item: ChildItem;
}
export function NavItems({ item }: NavItemsProps) {
  const { pathname } = useLocation();
  return (
    <>
      <SidebarItem
        href={item.url}
        className={`${
          item.disabled
            ? "hover:text-link cursor-default opacity-50 hover:bg-transparent"
            : item.url == pathname
              ? `${item.icon ? "!text-white" : "!text-primary"} bg-primary hover:bg-primary mb-0.5 hover:text-white`
              : "text-link hover:bg-lightprimary dark:hover:bg-lightprimary group/link bg-transparent"
        } `}
      >
        <span className="align-center flex items-center gap-3.5 truncate">
          {item.icon ? (
            <Icon
              icon={item.icon}
              className={`${item.color} my-0.5`}
              height={21}
            />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? "group-hover/link:bg-primary border-primary mx-1 size-2 rounded-full border !bg-transparent"
                  : "border-dark dark:border-darklink group-hover/link:!border-primary mx-1 size-2 rounded-full border !bg-transparent"
              } `}
            ></span>
          )}
          <div className="hide-menu max-w-36 flex-1 overflow-hidden !leading-normal">
            {`${item.name}`}
            {item.subtitle ? (
              <p className="mt-1 text-xs">{`${item.subtitle}`}</p>
            ) : null}
          </div>
          {item.badge ? (
            item.badgeType === "filled" ? (
              <span className="bg-primary sidebar-badge flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white">
                9
              </span>
            ) : (
              <span className="border-primary text-primary sidebar-badge rounded-full border bg-transparent px-2 py-1 text-xs font-semibold">
                Outline
              </span>
            )
          ) : null}
        </span>
      </SidebarItem>
    </>
  );
}

export default NavItems;
