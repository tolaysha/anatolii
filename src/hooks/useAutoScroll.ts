"use client";

import { useEffect } from "react";

export function useAutoScroll(ref: React.RefObject<HTMLDivElement>, delay: number = 5000) {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startAutoScroll = () => {
      timeout = setTimeout(() => {
        if (ref.current) {
          ref.current.scrollBy({ top: 1, behavior: "smooth" });
        }
      }, delay);
    };

    const stopAutoScroll = () => {
      clearTimeout(timeout);
    };

    ref.current?.addEventListener("scroll", stopAutoScroll);
    startAutoScroll();

    return () => {
      clearTimeout(timeout);
      ref.current?.removeEventListener("scroll", stopAutoScroll);
    };
  }, [ref, delay]);
}