import { Card } from "flowbite-react";
import React from "react";

import { useCustomizer } from "@/context/customizer-context";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
const TitleCard: React.FC<MyAppProps> = ({ children, className, title }) => {
  const { isCardShadow, isBorderRadius } = useCustomizer();
  return (
    <Card
      className={`card no-inset no-ring ${className} ${
        isCardShadow
          ? "dark:shadow-dark-md p-0 shadow-md"
          : "border-ld border p-0 shadow-none"
      } `}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
    >
      <div className="border-ld border-b px-6 py-4">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="p-6 pt-4">{children}</div>
    </Card>
  );
};

export default TitleCard;
