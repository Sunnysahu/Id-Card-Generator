import React from "react";

export default function InputForm({
  children,
  type = "text",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <input type={type} className={`${className}`} {...props}>
      {children}
    </input>
  );
}
