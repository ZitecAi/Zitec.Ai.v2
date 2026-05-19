import { cn } from "@/lib/utils";

interface WireframeLandscapeProps {
  className?: string;
  compact?: boolean;
}

export function WireframeLandscape({ className, compact = false }: WireframeLandscapeProps) {
  return (
    <div className={cn("wireframe-landscape", compact && "wireframe-landscape-compact", className)} aria-hidden="true">
      <img className="wireframe-image" src="/images/background-zisign.gif" alt="" loading="eager" />
      <div className="wireframe-color" />
    </div>
  );
}
