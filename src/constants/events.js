const allEvents = [];

allEvents.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);

const prevEvents = [];
const featureEvents = [];

for (let i = 0; i < allEvents.length; ++i) {
  const event = allEvents[i];
  const { date, duration } = event;

  if (!date) {
    featureEvents.push(event);
    continue;
  }

  const eDate = new Date(date);
  eDate.setHours(eDate.getHours() + duration);
  const nDate = new Date();

  if (eDate - nDate < 0) {
    prevEvents.push(event.setIsPrev());
  } else {
    featureEvents.push(event);
  }
}

prevEvents.reverse();

const events = { featureEvents, prevEvents };

export default events;
