import { useCallback, useLayoutEffect, useState } from "react";
import type { CSSProperties } from "react";

/**
 * DOM düğümü hazır olmadan effect’in bir kez çalışıp `return` etmesi (ref henüz null)
 * gözlemcinin hiç kurulmamasına yol açabiliyordu. Callback ref + layout effect ile
 * her gerçek eleman bağlandığında gözlemci kurulur.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((node: T | null) => {
    setElement(node);
  }, []);

  const root = options?.root ?? null;
  const rootMargin = options?.rootMargin;
  const threshold =
    options?.threshold !== undefined ? options.threshold : 0.1;

  useLayoutEffect(() => {
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, root, rootMargin, threshold]);

  return { ref, inView };
}

export function fadeUp(inView: boolean, delay = 0): CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}

export function fadeLeft(inView: boolean, delay = 0): CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };
}
