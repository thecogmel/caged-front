import { Card } from "flowbite-react";
import React from "react";

import { useCustomizer } from "@/context/customizer-context";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const OutlineCard: React.FC<MyAppProps> = ({ children, className }) => {
  const { isCardShadow } = useCustomizer();
  return (
    <Card
      className={`card no-inset no-ring ${className} ${isCardShadow ? "border-ld border" : "border-ld border"} `}
    >
      {children}
    </Card>
  );
};

export default OutlineCard;
