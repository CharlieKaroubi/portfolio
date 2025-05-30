'use client';

import React from "react";
import StarfieldAnimation from "react-starfield";

export default function StarfieldBackground({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <StarfieldAnimation />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "2rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
