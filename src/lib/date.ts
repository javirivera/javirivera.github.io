// Formats a date like Jekyll's "%B %-d, %Y" (e.g. "April 18, 2016").
export function formatLongDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
