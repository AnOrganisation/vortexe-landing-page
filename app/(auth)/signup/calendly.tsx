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
    //<!-- Calendly inline widget begin -->
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/vortexeai/introduction-1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      {/* <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script> */}
    </>
    //<!-- Calendly inline widget end -->
  );
}
