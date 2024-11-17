// Example of a full Select component
import React from "react";

export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {children}
    </select>
  );
}

export function SelectContent({ children }) {
  return <div>{children}</div>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

export function SelectTrigger({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function SelectValue({ value }) {
  return <span>{value}</span>;
}
