import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";

import { useCustomizer } from "@/context/customizer-context";

import Miniicons from "./MiniSidebar";

export function IconSidebar() {
  const { selectedIconId, setSelectedIconId, setIsCollapse } =
    useCustomizer() || {};
  const [activeIcon, setActiveIcon] = useState(selectedIconId);

  // Effect to store and retrieve selectedIconId from localStorage
  useEffect(() => {
    const storedIconId = localStorage.getItem("selectedIconId");
    if (storedIconId) {
      setActiveIcon(parseInt(storedIconId));
    }
  }, []);

  // Handle icon click
  const handleClick = (id: number) => {
    setSelectedIconId(id);
    setIsCollapse("full-sidebar");
    setActiveIcon(id);
    localStorage.setItem("selectedIconId", id.toString()); // Store selectedIconId in localStorage
  };

  return (
    <>
      <SimpleBar className="miniicons">
        {Miniicons.map((links, index) => (
          <button
            key={index}
            className={`hover:text-primary text-darklink hover:bg-lightprimary mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${
              links.id === activeIcon
                ? "text-primary bg-lightprimary"
                : "text-darklink bg-transparent"
            }`}
            type="button"
            onClick={() => handleClick(links.id)}
          >
            <Icon icon={links.icon} height={24} className="dark:bg-blue" />
          </button>
        ))}
      </SimpleBar>
    </>
  );
}
