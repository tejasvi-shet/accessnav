
import type { ReactNode } from 'react';

interface Props {
  open: boolean;
  children: ReactNode;
  maxHeight?: string;
}

export default function BottomSheet({
  open,
  children,
  maxHeight = '70%',
}: Props) {
  if (!open) return null;

  return (
    <div
      className="bottom-sheet animate-slide-up absolute inset-x-0 bottom-0 z-30 flex flex-col overflow-hidden rounded-t-3xl bg-white shadow-sheet"
      style={{ maxHeight }}
    >
      {/* Drag Handle */}
      <div className="flex shrink-0 justify-center pt-3 pb-3">
        <div className="h-1.5 w-12 rounded-full bg-slate-200" />
      </div>

      {/* Scrollable Content */}
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-8 pt-3">
        {children}
      </div>
    </div>
  );
}
