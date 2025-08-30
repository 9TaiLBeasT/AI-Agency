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
        (navigator as any).connection.effectiveType === 'slow-2g' ||
        (navigator as any).connection.saveData === true))
  );
};

export const isMidRangeDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  return (
    isMobile() && 
    !isLowEndDevice() && 
    (navigator.hardwareConcurrency <= 4 ||
     (navigator as any).deviceMemory < 8 ||
     ((navigator as any).connection &&
       (navigator as any).connection.effectiveType === '3g'))
  );
};

export const preloadCriticalResources = () => {
  // Define resources by type for appropriate preloading
  const resources = {
    fonts: [
      { path: '/fonts/inter-var.woff2', type: 'font/woff2' },
      { path: '/fonts/inter-var-italic.woff2', type: 'font/woff2' },
    ],
    scripts: [
      { path: '/src/main.tsx', type: 'module' },
    ],
    styles: [],
    images: []
  };

  // Preload fonts
  resources.fonts.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.path;
    link.as = 'font';
    link.type = resource.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload scripts
  resources.scripts.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.path;
    link.as = 'script';
    if (resource.type) link.type = resource.type;
    document.head.appendChild(link);
  });
};

// Add lazy loading for images and iframes
export const setupLazyLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img').forEach(img => {
      if (!img.loading) img.loading = 'lazy';
    });
    
    document.querySelectorAll('iframe').forEach(iframe => {
      if (!iframe.loading) iframe.loading = 'lazy';
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    // Could implement intersection observer based solution here
    import('./lazy-load-fallback').catch(() => {
      console.log('Lazy loading fallback not available');
    });
  }
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