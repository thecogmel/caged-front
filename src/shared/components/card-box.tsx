import { Card } from "flowbite-react";
import React from "react";

import { useCustomizer } from "@/context/customizer-context";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  const { isCardShadow, isBorderRadius } = useCustomizer();
  return (
    <Card
      className={`card no-inset no-ring ${className} ${isCardShadow ? "dark:shadow-dark-md !border-none shadow-md dark:!border-none" : "border-ld border shadow-none"} `}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
    >
      {children}
    </Card>
  );
};

export default CardBox;
