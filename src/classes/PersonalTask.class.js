export default class PersonalTask {
  constructor(itemName) {
    this.itemName = itemName;
    this.task = [];
    this.resources = [];
  }

  addTask(...text) {
    this.task = [...this.task, ...text];
  }

  addResource(...resources) {
    this.resources = [...this.resources, ...resources];
  }
}
