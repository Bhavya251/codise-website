import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`neomorphic neomorphic-hover rounded-xl px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
}
