import { useEffect, useRef, useState } from 'react';

export type SlideDirection = 'from-bottom' | 'from-left' | 'from-right' | 'from-top';

interface SlideAnimationConfig {
  direction: SlideDirection;
  duration?: number;
  delay?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
}

const getTransformValue = (direction: SlideDirection, distance: number) => {
  switch (direction) {
    case 'from-bottom':
      return `translateY(${distance}px)`;
    case 'from-top':
      return `translateY(-${distance}px)`;
    case 'from-left':
      return `translateX(-${distance}px)`;
    case 'from-right':
      return `translateX(${distance}px)`;
    default:
      return 'translateY(0)';
  }
};

export const useSlideAnimation = (config: SlideAnimationConfig) => {
  const elementRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    direction,
    duration = 800,
    delay = 0,
    distance = 50,
    threshold = 0.1,
    once = true
  } = config;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once, hasAnimated]);

  const animationStyles = {
    transform: isVisible ? 'translate(0)' : getTransformValue(direction, distance),
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  };

  return { ref: elementRef, style: animationStyles, isVisible };
};

// Predefined animation configurations
export const slideAnimationConfigs = {
  // Standard animations
  fromBottom: { direction: 'from-bottom' as SlideDirection, duration: 800, distance: 50 },
  fromLeft: { direction: 'from-left' as SlideDirection, duration: 800, distance: 50 },
  fromRight: { direction: 'from-right' as SlideDirection, duration: 800, distance: 50 },
  fromTop: { direction: 'from-top' as SlideDirection, duration: 800, distance: 50 },
  
  // Fast animations
  fastFromBottom: { direction: 'from-bottom' as SlideDirection, duration: 600, distance: 30 },
  fastFromLeft: { direction: 'from-left' as SlideDirection, duration: 600, distance: 30 },
  fastFromRight: { direction: 'from-right' as SlideDirection, duration: 600, distance: 30 },
  
  // Slow dramatic animations
  slowFromBottom: { direction: 'from-bottom' as SlideDirection, duration: 1200, distance: 80 },
  
  // Staggered animations (with delays)
  staggered1: { direction: 'from-bottom' as SlideDirection, duration: 800, delay: 0 },
  staggered2: { direction: 'from-bottom' as SlideDirection, duration: 800, delay: 200 },
  staggered3: { direction: 'from-bottom' as SlideDirection, duration: 800, delay: 400 },
  staggered4: { direction: 'from-bottom' as SlideDirection, duration: 800, delay: 600 },
  
  // Hero specific animations
  heroIcon: { direction: 'from-top' as SlideDirection, duration: 1000, delay: 200, distance: 60 },
  heroTitle: { direction: 'from-bottom' as SlideDirection, duration: 1000, delay: 400, distance: 40 },
  heroSubtitle: { direction: 'from-bottom' as SlideDirection, duration: 1000, delay: 600, distance: 30 },
  heroDescription: { direction: 'from-bottom' as SlideDirection, duration: 1000, delay: 800, distance: 30 },
  heroButtons: { direction: 'from-bottom' as SlideDirection, duration: 1000, delay: 1000, distance: 30 }
}; 