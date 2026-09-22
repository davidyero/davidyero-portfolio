import { ReactNode } from 'react';

export type BadgeTone = 'live' | 'beta' | 'soon' | 'offline' | 'neutral' | 'accent';

export interface BadgeProps {
  tone?: BadgeTone;
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}
