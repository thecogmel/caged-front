import { uniqueId } from "lodash";

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: string;
  children?: ChildItem[];
  item?: MenuItem[];
  url?: string;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: string;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: string;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
}

export const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Dashboard",
        icon: "tabler:chart-bar",
        id: uniqueId(),
        url: "/",
      },
      {
        name: "Em construção",
        id: uniqueId(),
        icon: "tabler:app-window",
        children: [
          {
            id: uniqueId(),
            name: "Homepage",
            url: "/frontend-pages/homepage",
          },
        ],
      },
    ],
  },
];
