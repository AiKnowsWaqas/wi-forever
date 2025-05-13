import { formatDistance, intervalToDuration, format } from 'date-fns';

export const weddingDate = new Date('August 16, 2025 11:00:00 GMT+0530');

export const formatEventDate = (date: Date): string => {
  return format(date, 'EEEE, MMMM do, yyyy');
};

export const formatEventTime = (date: Date): string => {
  return format(date, 'h:mm a');
};

export const getTimeRemaining = (targetDate: Date): { 
  months: number;
  days: number; 
  hours: number; 
  minutes: number; 
  seconds: number 
} => {
  const now = new Date();
  
  if (now >= targetDate) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const duration = intervalToDuration({ start: now, end: targetDate });
  
  return {
    months: duration.months || 0,
    days: duration.days || 0,
    hours: duration.hours || 0,
    minutes: duration.minutes || 0,
    seconds: duration.seconds || 0,
  };
};

export const getTimeRemainingText = (targetDate: Date): string => {
  const now = new Date();
  
  if (now >= targetDate) {
    return 'The wedding day has arrived!';
  }
  
  return formatDistance(targetDate, now, { addSuffix: true });
};

export const formatCalendarDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
};