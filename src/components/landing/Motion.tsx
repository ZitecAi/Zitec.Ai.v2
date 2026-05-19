import { CSSProperties, HTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealEffect = "up" | "down" | "left" | "right" | "zoom" | "none";

interface MotionRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  effect?: RevealEffect;
  threshold?: number;
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  effect = "up",
  threshold = 0.16,
  style,
  ...props
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", `motion-reveal-${effect}`, isVisible && "is-visible", className)}
      style={{ "--motion-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
