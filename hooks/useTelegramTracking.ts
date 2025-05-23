import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const API_ENDPOINT = 'https://telegrambot-drab-eight.vercel.app/api/notify';

export const useTelegramTracking = () => {
  const pathname = usePathname();
  const hasTrackedVisit = useRef(false);

  const trackEvent = async (message: string) => {
    try {
      console.log('Tracking event:', { message, pathname });
      const response = await fetch(
        `${API_ENDPOINT}?message=${encodeURIComponent(message)}&page=${encodeURIComponent(pathname)}`
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
      trackEvent('Portfolio visited');
      hasTrackedVisit.current = true;
    }
  }, []); // Empty dependency array means this only runs once on mount

  const trackDownload = (fileName: string) => {
    trackEvent(`Resume downloaded: ${fileName}`);
  };

  return { trackDownload };
};
