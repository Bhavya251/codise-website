import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`neomorphic-button neomorphic-hover rounded-xl px-4 py-2 font-medium text-gray-700 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
