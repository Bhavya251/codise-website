import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`neomorphic neomorphic-hover rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
}
