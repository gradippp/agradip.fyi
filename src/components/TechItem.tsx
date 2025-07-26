import React from "react";

interface TechItemProps {
  name: string;
  icon: React.ElementType;
  size?: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon: Icon, size = 48 }) => {
  return (
    <div className="flex flex-col items-center m-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <Icon size={size} />
      <span className="mt-1 text-sm font-medium">{name}</span>
    </div>
  );
};

export default TechItem;
