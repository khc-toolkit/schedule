export default function timeFormat(inputDate) {
  const updateDate = new Date(inputDate);
  const currentDate = new Date();

  const diffSeconds = Math.abs(Math.floor((currentDate - updateDate) / 1000));
  if (diffSeconds < 60) return `${diffSeconds} վայրկյան`;

  const diffMinutes = Math.ceil(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} րոպե`;

  const diffHours = Math.ceil(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} ժամ`;

  const diffDays = Math.ceil(diffHours / 24);
  return `${diffDays} օր`;
}
