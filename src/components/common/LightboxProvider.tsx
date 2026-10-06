import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextType {
  openLightbox: (images: LightboxImage[], initialIndex?: number) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const openLightbox = useCallback((imgs: LightboxImage[], index = 0) => {
    setImages(imgs);
    setCurrentIndex(index);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  // Keyboard navigation & escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.25, 4));
    } else {
      setZoom((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const currentImage = images[currentIndex];

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {isOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-fadeIn p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-heading">
              <span>{currentIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{images.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DAAF37] hover:text-[#0A0A0A] border border-white/20 text-white flex items-center justify-center transition-all"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DAAF37] hover:text-[#0A0A0A] border border-white/20 text-white flex items-center justify-center transition-all"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleResetZoom(); }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DAAF37] hover:text-[#0A0A0A] border border-white/20 text-white flex items-center justify-center transition-all"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-[#DAAF37] text-[#0A0A0A] font-bold flex items-center justify-center shadow-[0_0_20px_rgba(218,175,55,0.4)] hover:scale-105 transition-transform"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Chevrons for Multi-image gallery */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-[#DAAF37] hover:text-[#0A0A0A] border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-[#DAAF37] hover:text-[#0A0A0A] border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container with Zoom & Pan */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || 'Lightbox Preview'}
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none pointer-events-auto"
            />
          </div>

          {/* Caption / Alt Footer */}
          {currentImage.alt && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-lg px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white/90 text-xs font-sans text-center pointer-events-none shadow-lg">
              {currentImage.alt}
            </div>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
