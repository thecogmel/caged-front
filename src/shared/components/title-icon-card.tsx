import { Icon } from "@iconify/react";
import { Button, Card } from "flowbite-react";
import React, { useContext } from "react";

import { CustomizerContext } from "@/context/customizerContext";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleIconCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
  onDownload,
}) => {
  const { isCardShadow, isBorderRadius } = useContext(CustomizerContext);

  return (
    <Card
      className={`card no-inset no-ring ${className} ${
        isCardShadow
          ? "dark:shadow-dark-md p-0 shadow-md"
          : "border-ld border p-0 shadow-none"
      }`}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
    >
      <div className="border-ld flex items-center justify-between border-b px-6 py-4">
        <h5 className="text-xl font-semibold">{title}</h5>

        <Button
          className="flex items-center"
          size="sm"
          color="primary"
          onClick={onDownload}
        >
          <Icon icon="tabler:download" width={20} height={20} />
        </Button>
      </div>
      <div className="p-6 pt-4">{children}</div>
    </Card>
  );
};

export default TitleIconCard;
