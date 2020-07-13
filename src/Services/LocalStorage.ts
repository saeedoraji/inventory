export class LocalStorage {
  private field: string = "";
  constructor(key: string) {
    this.field = key;
  }

  get key() {
    if (!localStorage[this.field]) {
      return [];
    } else {
      return JSON.parse(localStorage[this.field]);
    }
  }

  set key(value: Object) {
    this.field = localStorage[this.field] = JSON.stringify(value);
  }
}
