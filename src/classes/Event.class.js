export default class Event {
  constructor(title, place = null, date = null, duration = 1) {
    this.title = title;
    this.duration = duration;
    this.place = place;
    this.date = date;
    this.isPrev = false;
    this.isExam = false;
    this.isDiploma = false;
    this.availableBefore = null;
  }

  setIsPrev() {
    this.isPrev = true;
    return this;
  }

  setIsExam() {
    this.isExam = true;
    return this;
  }

  setIsDiploma() {
    this.isDiploma = true;
    return this;
  }

  setAvailableBefore(date) {
    this.availableBefore = date;

    const startDate = new Date(this.date);
    const endDate = new Date(date);

    this.duration = (endDate - startDate) / (1000 * 60 * 60);

    return this;
  }
}
