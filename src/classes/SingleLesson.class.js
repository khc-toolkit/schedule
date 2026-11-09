// components
import Lesson from "./Lesson.class.js";

// constants
import lessonStatuses from "../constants/lessonStatuses.js";
import lessonsTimes from "../constants/lessonsTimes.js";

export default class SingleLesson extends Lesson {
  constructor(title, room, teacher) {
    super();

    this.title = title;
    this.room = room;
    this.teacher = teacher;
    this.status = lessonStatuses.DEFAULT;
    this.type = "";
    this.subGroup = -1;
    this.start = "";
    this.end = "";
  }

  getData() {
    return this;
  }

  isLesson() {
    this.type += "Դաս. ";
    return this;
  }
  isLab() {
    this.type += "Լաբ. ";
    return this;
  }
  isPractice() {
    this.type += "Գործ. ";
    return this;
  }

  group_1() {
    this.subGroup = 1;
    return this;
  }
  group_2() {
    this.subGroup = 2;
    return this;
  }

  setLessonTime(lessonNumber) {
    const lessonTimes = lessonsTimes[lessonNumber];
    if (!lessonTimes) console.error(`undefined time`);

    const { start, end } = lessonTimes;

    this.start = start;
    this.end = end;

    return this;
  }

  setTempRoom(room, started, delayWeeks) {
    const startedMilliseconds = new Date(started).getTime();
    const delayMilliseconds =
      startedMilliseconds + delayWeeks * 7 * 24 * 3600000;
    const dateNow = new Date().getTime();

    const differenceMillicesonds = delayMilliseconds - dateNow;
    const weeksLeft = Math.ceil(
      differenceMillicesonds / 1000 / 60 / 60 / 24 / 7,
    );

    if (weeksLeft > 1) {
      this.tempRoom = `${room} ևս ${weeksLeft} շաբաթ`;
    } else {
      if (weeksLeft === 1) {
        this.tempRoom = `${room} վերջին շաբաթ`;
      }
    }

    return this;
  }
}
