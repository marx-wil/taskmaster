import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children, className = '' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Start animation when top of section is 80% from top of viewport
        end: 'bottom 20%', // End animation when bottom of section is 20% from top of viewport
        toggleActions: 'play none none reverse', // Play on enter, reverse on leave
      },
    });

    // Initial state
    gsap.set(section, { opacity: 0, y: 50 });

    // Animation sequence
    tl.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 