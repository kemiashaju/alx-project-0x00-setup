import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="border px-3 py-1 rounded-full text-sm font-medium text-gray-700">
      {title}
    </div>
  );
};

export default Pill;
