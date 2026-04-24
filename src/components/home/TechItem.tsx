import React from "react";

interface TechItemProps {
  name: string;
  icon: React.ElementType;
  size?: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon: Icon, size = 20 }) => {
  return (
    <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white group cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      <Icon size={size} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="text-sm font-medium tracking-tight text-zinc-400 group-hover:text-zinc-100">{name}</span>
    </div>
  );
};

export default TechItem;
