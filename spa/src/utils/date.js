const formatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
});

export const formatScheduleTime = (value) => formatter.format(new Date(value));

export const formatTicketPrice = (value) => new Intl.NumberFormat('ru-RU').format(value);
