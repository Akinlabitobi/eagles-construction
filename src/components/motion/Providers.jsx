"use client";

import { MotionConfig } from "framer-motion";

// Respects the visitor's "reduce motion" OS setting for every animation on the site.
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
