import React from "react";

export default function Button({
  text = "",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${className} disabled:opacity-70 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? loadingText : text}
    </button>
  );
}