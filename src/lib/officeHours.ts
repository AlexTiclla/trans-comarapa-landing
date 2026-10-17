import { useEffect, useState } from 'react';

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.trim().split(':').map(Number);
  return h * 60 + m;
};

// Minutos transcurridos del día en hora de Bolivia
const nowInBolivia = () =>
  toMinutes(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/La_Paz', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).format(new Date()),
  );

export const isOpen = (hours: string, now: number) => {
  const [open, close] = hours.split('–').map(toMinutes);
  const closeAt = close === 0 ? 24 * 60 : close; // "00:00" = medianoche
  return now >= open && now < closeAt;
};

export const useBoliviaClock = () => {
  const [now, setNow] = useState(nowInBolivia);
  useEffect(() => {
    const timer = setInterval(() => setNow(nowInBolivia()), 60_000);
    return () => clearInterval(timer);
  }, []);
  return now;
};
