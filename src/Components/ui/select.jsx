import React, { useState } from "react";

export function Select({ children, value, onChange, className = "" }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`neomorphic neomorphic-hover rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

// Optional components for structure (matching your previous import)
export const SelectTrigger = ({ children }) => <div>{children}</div>;
export const SelectValue = ({ children }) => <div>{children}</div>;
export const SelectContent = ({ children }) => <div>{children}</div>;
