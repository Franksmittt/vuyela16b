'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, type GalleryImage } from './gallery-data';

export default function GalleryClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active: GalleryImage | null =
    activeIndex === null ? null : galleryImages[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % galleryImages.length
        );
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full break-inside-avoid overflow-hidden bg-[#1a1a1a] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
          >
            <div
              className={`relative w-full ${image.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {image.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[80] bg-[#141414]/95 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close gallery lightbox"
            className="absolute top-4 right-4 text-white hover:text-[#FFD700] transition-colors z-10"
            onClick={() => setActiveIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 text-white hover:text-[#FFD700] transition-colors z-10"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(
                (activeIndex - 1 + galleryImages.length) % galleryImages.length
              );
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 sm:right-6 text-white hover:text-[#FFD700] transition-colors z-10"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % galleryImages.length);
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white/90 text-sm sm:text-base py-3 bg-gradient-to-t from-[#141414] to-transparent">
              {active.caption}
              <span className="text-white/50 ml-2">
                {activeIndex + 1} / {galleryImages.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
