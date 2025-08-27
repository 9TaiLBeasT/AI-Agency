"use client";

export function FlowingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Clean background - no flowing shapes */}
    </div>
  );
}

export function ArtisticBrushStrokes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Clean background - no brush strokes */}
    </div>
  );
}