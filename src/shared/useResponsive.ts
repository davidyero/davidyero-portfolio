import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface ResponsiveState {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
  width: number;
}

const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

const getDeviceType = (width: number): DeviceType => {
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'desktop';
  return 'wide';
};

export const useResponsive = (): ResponsiveState => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const deviceType = getDeviceType(width);

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isWide: deviceType === 'wide',
    width,
  };
};
