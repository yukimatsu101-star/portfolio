import { useState, useEffect } from "react";
import { Play, X, ChevronDown, ChevronUp } from "lucide-react";

export function Tag({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-medium tracking-wide uppercase ${className}`}>
      {label}
    </span>
  );
}

export function LazyYouTube({ youtubeId, title, customThumb }: { youtubeId: string; title: string; customThumb?: string }) {
  const [active, setActive] = useState(false);
  const thumb = customThumb ?? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  if (!active) {
    return (
      <div className="relative aspect-video bg-secondary cursor-pointer group overflow-hidden" onClick={() => setActive(true)}>
        <img src={thumb} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-accent hover:bg-accent/80 transition-colors shadow-lg" onClick={onClose} aria-label="Close">
        <X className="w-5 h-5 text-white" />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export function SlideModal({ slides, title, onClose }: { slides: string[]; title: string; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(0,0,0,0.92)" }} onClick={onClose}>
      <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ background: "#1A1A1E" }} onClick={e => e.stopPropagation()}>
        <span className="text-white text-sm font-medium" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
          {title} <span className="text-white/50 ml-2">{idx + 1} / {slides.length}</span>
        </span>
        <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full bg-accent hover:bg-accent/80 transition-colors shadow-lg" aria-label="閉じる">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden relative" onClick={e => e.stopPropagation()}>
        <img key={idx} src={slides[idx]} alt={`${title} ${idx + 1}`} className="max-w-full max-h-full object-contain" style={{ userSelect: "none" }} />
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,0.15)" }} aria-label="前へ">
          <ChevronUp className="w-5 h-5 text-white -rotate-90" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,0.15)" }} aria-label="次へ">
          <ChevronDown className="w-5 h-5 text-white -rotate-90" />
        </button>
      </div>
      <div className="flex justify-center gap-2 py-4 shrink-0" onClick={e => e.stopPropagation()}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className="w-2 h-2 rounded-full transition-colors" style={{ background: i === idx ? "#0F8EAE" : "rgba(255,255,255,0.35)" }} aria-label={`${i + 1}枚目`} />
        ))}
      </div>
    </div>
  );
}
