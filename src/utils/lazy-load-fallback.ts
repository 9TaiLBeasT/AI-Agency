// Fallback implementation for browsers that don't support native lazy loading

export const initLazyLoadFallback = () => {
  if (!('IntersectionObserver' in window)) {
    // For very old browsers without IntersectionObserver, load all images immediately
    loadAllImagesImmediately();
    return;
  }

  const lazyImages = Array.from(document.querySelectorAll<HTMLImageElement>('img[data-src]'));
  const lazyIframes = Array.from(document.querySelectorAll<HTMLIFrameElement>('iframe[data-src]'));
  
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyElement = entry.target as HTMLImageElement | HTMLIFrameElement;
        
        if (lazyElement.dataset.src) {
          lazyElement.src = lazyElement.dataset.src;
          delete lazyElement.dataset.src;
        }
        
        // Handle srcset for images
        if ('srcset' in lazyElement && lazyElement.dataset.srcset) {
          (lazyElement as HTMLImageElement).srcset = lazyElement.dataset.srcset;
          delete lazyElement.dataset.srcset;
        }
        
        lazyLoadObserver.unobserve(lazyElement);
      }
    });
  }, {
    rootMargin: '200px 0px', // Start loading 200px before they appear in viewport
    threshold: 0.01 // Trigger when 1% of the element is visible
  });
  
  // Observe all lazy images and iframes
  lazyImages.forEach(lazyImage => {
    lazyLoadObserver.observe(lazyImage);
  });
  
  lazyIframes.forEach(lazyIframe => {
    lazyLoadObserver.observe(lazyIframe);
  });
};

// Fallback for very old browsers
const loadAllImagesImmediately = () => {
  const lazyElements = Array.from(document.querySelectorAll<HTMLImageElement | HTMLIFrameElement>('img[data-src], iframe[data-src]'));
  
  lazyElements.forEach(element => {
    if (element.dataset.src) {
      element.src = element.dataset.src;
      delete element.dataset.src;
    }
    
    if ('srcset' in element.dataset && element.dataset.srcset) {
      const srcsetValue = element.dataset.srcset || '';
      if (element instanceof HTMLImageElement) {
        element.srcset = srcsetValue;
      } else {
        element.setAttribute('srcset', srcsetValue);
      }
      delete element.dataset.srcset;
    }
  });
};

// Auto-initialize when imported
initLazyLoadFallback();