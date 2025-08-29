// Performance optimization utilities

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : ''
  );
};

export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  return (
    navigator.hardwareConcurrency <= 2 ||
    (navigator as any).deviceMemory < 4 ||
    ((navigator as any).connection &&
      ((navigator as any).connection.effectiveType === '2g' ||
        (navigator as any).connection.effectiveType === 'slow-2g'))
  );
};

export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/fonts/inter-var-italic.woff2',
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'font';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createLazyObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const defaultOptions = {
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Responsive image helper
export const getResponsiveImage = (
  basePath: string,
  sizes: { mobile?: string; tablet?: string; desktop?: string } = {}
) => {
  if (isMobile()) {
    return sizes.mobile || basePath;
  }
  
  const isTablet = window.innerWidth <= 1024;
  if (isTablet) {
    return sizes.tablet || basePath;
  }
  
  return sizes.desktop || basePath;
};