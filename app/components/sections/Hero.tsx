'use client';

import { useEffect, useRef } from 'react';

type Page = 'home' | 'about' | 'services' | 'corporates' | 'academic' | 'donors' | 'government' | 'contact';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cycleRef.current;
    if (!el) return;
    const words = ['deserves', 'needs', 'is ready for'];
    let wordIdx = 0, charIdx = 0, deleting = false;
    const speed = { type: 90, delete: 55, pause: 2200, pauseShort: 400 };
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = words[wordIdx];
      if (!deleting) {
        el!.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, speed.pause);
          return;
        }
        timer = setTimeout(tick, speed.type);
      } else {
        el!.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timer = setTimeout(tick, speed.pauseShort);
          return;
        }
        timer = setTimeout(tick, speed.delete);
      }
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen" style={{
      backgroundImage: 'url(/hero-image2.png)',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-10" />
      
      {/* Grid overlay pattern */}
      <div className="absolute inset-0 hero-grid-overlay z-20" />

      <section className="hero relative z-30">
        
        <div className="hero-inner">

         <div className="hero-content relative z-20" style={{position: 'relative', zIndex: 20}}>
          <div className="hero-eyebrow">Workforce Solutions | Leadership & Organisational Development</div>
          <h1>
            Building the health systems Africa {" "}<br /> 
            <em><span ref={cycleRef}></span></em><br /> 
          </h1>
          <p className="hero-sub">
            We design and deliver evidence-based learning programmes that build capability, raise professional standards and create genuine career pathways across Africa.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => onNavigate('contact')}>Work with us</button>
            <button className="btn-ghost" onClick={() => onNavigate('services')}>Our services</button>
          </div>
        </div> 
       </div>
        <div className="hero-scroll animate"><div className="scroll-line" />Scroll</div>
      </section>
    </div>
  );
}
