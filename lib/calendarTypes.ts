export type CalendarEvent = {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: string; // ISO
  end?: string; // ISO
};
