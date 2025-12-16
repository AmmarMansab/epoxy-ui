'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSProvider() {
  useEffect(() => {
    // Prevent horizontal scroll during animations
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0,
      useClassNames: false,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: '',
      animatedClassName: 'aos-animate',
    });

    // Refresh AOS after a short delay to ensure proper initialization
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => {
      // Cleanup
      AOS.refreshHard();
    };
  }, []);

  return null;
}

