// src/components/ui/button.js
import React from 'react';

// Must use "export function" (not "export default")
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#ff6b6b] text-white rounded hover:bg-[#ff5252] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}