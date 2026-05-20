import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assets";

interface WireframeLandscapeProps {
  className?: string;
  compact?: boolean;
}

export function WireframeLandscape({ className, compact = false }: WireframeLandscapeProps) {
  return (
    <div className={cn("wireframe-landscape", compact && "wireframe-landscape-compact", className)} aria-hidden="true">
      <video className="wireframe-image" src={assetPath("images/zisign-logo.webm")} autoPlay muted loop playsInline preload="auto" />
      <div className="wireframe-color" />
    </div>
  );
}
