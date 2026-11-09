// libs
import { useState } from "react";

// components
import EventCard from "../../components/EventCard";
import DoubleEventChanger from '../../components/DoubleEventChanger';

// constants
import events from "../../constants/events";

// styles
import classes from "./styles.module.css";

export default function EventsPage() {
  const [isWaitingEvent, setIsVaitingEvent] = useState(true);

  const eventsList = isWaitingEvent ? events.featureEvents : events.prevEvents;

  return (
    <div className={classes.root}>
      <DoubleEventChanger isWaitingEvent={isWaitingEvent} setIsWaitingEvent={setIsVaitingEvent}/>
        <div className={classes.events}>
        {eventsList.length === 0 ? (
          <div className={classes.noEvents}>
            Միջոցառումներ չկան
          </div>
        ) : (
          eventsList.map((eventData, ind) => (
            <EventCard data={eventData} key={ind} />
          ))
        )}
    </div>
    </div>
  );
}
