import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 bg-foreground/90 cursor-pointer"
        onClick={onClose}
      />
      <div className="relative max-w-5xl w-full max-h-[90vh] animate-[fadeUp_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-primary-foreground hover:text-primary-foreground/70 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Cerrar"
        >
          <X className="w-7 h-7" />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
        />
      </div>
    </div>
  );
}
