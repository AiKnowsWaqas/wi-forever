export interface EventDetail {
  id: string;
  title: string;
  time: string;
  location: string;
  description: string;
  mapUrl: string;
  embedMapUrl: string;
}

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface RsvpFormData {
  name: string;
  email: string;
  phone: string;
  attending: boolean;
  guests: number;
  dietaryRestrictions: string;
}