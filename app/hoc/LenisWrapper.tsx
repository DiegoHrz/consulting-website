"use client";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
