export default class PersonalTask {
  constructor(title, link = null, shouldOnline = false) {
    this.title = title;
    this.link = link;
    this.shouldOnline = shouldOnline;
  }
}
