import React from "react";

interface TechItemProps {
  name: string;
  icon: React.ElementType;
  size?: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon: Icon, size = 48 }) => {
  return (
    <div style={styles.container}>
      <Icon size={size} />
      <span style={styles.label}>{name}</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    margin: "10px",
  },
  label: {
    marginTop: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default TechItem;
