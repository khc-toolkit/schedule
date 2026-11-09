// constants
import lessonsTimes from "../constants/lessonsTimes";

export default function returnValueByLessonSlot(slot, ...values) {
  switch (slot) {
    case lessonsTimes[1].start: {
      return values[0];
    }

    case lessonsTimes[2].start: {
      return values[1];
    }

    case lessonsTimes[3].start: {
      return values[2];
    }

    case lessonsTimes[4].start: {
      return values[3];
    }

    default: {
      return null;
    }
  }
}
