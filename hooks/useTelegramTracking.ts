import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const useTelegramTracking = () => {
  const pathname = usePathname();
  const hasTrackedVisit = useRef(false);

  const trackEvent = async (message: string) => {
    try {
      console.log('Tracking event:', { message, pathname });
      const response = await fetch(
        `/api/notify?message=${encodeURIComponent(message)}&page=${encodeURIComponent(pathname)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Tracking error:', errorData);
      }
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  useEffect(() => {
    // Only track page visit on first mount
    if (!hasTrackedVisit.current) {
      trackEvent('Page visited');
      hasTrackedVisit.current = true;
    }
  }, []); // Empty dependency array means this only runs once on mount

  const trackDownload = (fileName: string) => {
    trackEvent(`Resume downloaded: ${fileName}`);
  };

  return { trackDownload };
};
