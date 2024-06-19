"use client";
import { useEffect } from "react";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/divyansh-vortexeai?background_color=0f172a&text_color=dadee2&primary_color=6366f1"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
}
