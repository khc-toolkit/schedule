// classes
import Event from "../classes/Event.class";

const allEvents = [
  new Event(
    "Անհատական առաջադրանք հանձնելու օրեր",
    "Դեկանատ",
    "2026-12-07T00:00:00+04:00",
  ).setAvailableBefore("2026-12-15T00:00:00+04:00"),

  new Event("Քննություններ", null, "2026-12-22T00:00:00+04:00")
    .setAvailableBefore("2027-01-24T00:00:00+04:00")
    .setIsExam(),
];

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
