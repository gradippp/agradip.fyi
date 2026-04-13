import React from "react";

interface TechItemProps {
  name: string;
  icon: React.ElementType;
  size?: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon: Icon, size = 20 }) => {
  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent group cursor-default">
      <Icon size={size} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="text-sm font-medium tracking-tight">{name}</span>
    </div>
  );
};

export default TechItem;
