import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-800 w-screen h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
