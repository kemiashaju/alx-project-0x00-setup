import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;