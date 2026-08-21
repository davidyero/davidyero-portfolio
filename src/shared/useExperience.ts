import { useEffect, useState } from 'react';

// David started his developer career on October 2nd, 2017.
export const CAREER_START = new Date(2017, 9, 2); // month is 0-indexed → 9 = October

export interface ExperienceBreakdown {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

const computeExperience = (from: Date, to: Date): ExperienceBreakdown => {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    // days in the previous month relative to `to`
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((to.getTime() - from.getTime()) / msPerDay);

  return { years, months, days, totalDays };
};

export const useExperience = (start: Date = CAREER_START): ExperienceBreakdown => {
  const [experience, setExperience] = useState<ExperienceBreakdown>(() =>
    computeExperience(start, new Date())
  );

  useEffect(() => {
    const tick = () => setExperience(computeExperience(start, new Date()));
    tick();
    // Recompute periodically so the day count rolls over without a reload.
    const interval = window.setInterval(tick, 60 * 1000);
    return () => window.clearInterval(interval);
  }, [start]);

  return experience;
};
