// Fallback implementation for browsers that don't support native lazy loading

export const initLazyLoadFallback = () => {
  if (!('IntersectionObserver' in window)) {
    // For very old browsers without IntersectionObserver, load all images immediately
    loadAllImagesImmediately();
    return;
  }

  const lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));
  const lazyIframes = [].slice.call(document.querySelectorAll('iframe[data-src]'));
  
  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyElement = entry.target;
        
        if (lazyElement.dataset.src) {
          lazyElement.src = lazyElement.dataset.src;
          delete lazyElement.dataset.src;
        }
        
        if (lazyElement.dataset.srcset) {
          lazyElement.srcset = lazyElement.dataset.srcset;
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
  const lazyElements = document.querySelectorAll('img[data-src], iframe[data-src]');
  
  lazyElements.forEach(element => {
    if (element.dataset.src) {
      element.src = element.dataset.src;
      delete element.dataset.src;
    }
    
    if ('srcset' in element.dataset) {
      element.setAttribute('srcset', element.dataset.srcset);
      delete element.dataset.srcset;
    }
  });
};

// Auto-initialize when imported
initLazyLoadFallback();