"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Navbar (`lg:right-20` / `lg:right-16`) ve RightSidebar genişliğiyle aynı sağ boşluk;
 * böylece `container-max` sol kenarı hero ile header’da çakışır.
 */
export default function MainWithSidebarGutter({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col transition-[padding] duration-700",
        scrolled ? "lg:pr-16" : "lg:pr-20"
      )}
    >
      {children}
    </div>
  );
}
