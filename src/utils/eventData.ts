import { EventDetail, CalendarEvent } from '../types';
import { weddingDate, formatCalendarDate } from './dateUtils';

export const eventDetails: EventDetail[] = [
  {
    id: 'nikkah',
    title: 'Nikkah Venue',
    time: '11:00 AM',
    location: 'Choti Masjid, Ambur',
    description: 'The sacred Nikkah ceremony will be held at Choti Masjid at Ambur. Please arrive on time for this blessed event.',
    mapUrl: 'https://maps.app.goo.gl/W1PpakDfrdbADnxe9',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.822627262104!2d78.70993647625767!3d12.790022618830834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08fd3c7a8a1f%3A0x7463abc6582353ec!2sChoti%20Masjid!5e0!3m2!1sen!2sin!4v1747132493135!5m2!1sen!2sin'
  },
  {
    id: 'reception',
    title: 'Wedding Reception/Lunch',
    time: 'After Zuhar Namaz',
    location: 'Buwa Shadi Mahal, Ambur',
    description: 'Join us for lunch and celebration following Zuhar Namaz. We look forward to sharing this joyous occasion with you.',
    mapUrl: 'https://maps.app.goo.gl/JApc9jmEkxZdKNiS8',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8285699678327!2d78.70902657625764!3d12.789637118839195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08fd1aef7059%3A0x5a23a4af4c964ebc!2sBuwa%20Shadi%20Mahal!5e0!3m2!1sen!2sin!4v1747132698975!5m2!1sen!2sin'
  }
];

export const calendarEvent: CalendarEvent = {
  title: 'Waqas Wedding',
  description: 'We joyfully invite you to celebrate our Nikkah ceremony followed by lunch reception.',
  location: 'Choti Masjid, Ambur\nCoordinates: 12.79018478956099, 78.71285471969199\nGoogle Maps: https://maps.app.goo.gl/Muovisx2WGBU1cwU9',
  startDate: formatCalendarDate(weddingDate),
  endDate: formatCalendarDate(new Date(weddingDate.getTime() + 5 * 60 * 60 * 1000)),
};

export const shareMessage = `السلام عليكم ✨
You're invited to our Nikkah
JazakAllah
`;