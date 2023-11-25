import type { Queue } from "~/interfaces/Queue";

export class StationQueue implements Queue {
  private items: { [index: number]: any } = {};
  private frontIndex = 0;
  private backIndex = 0;

  enqueue(item: Array<any>) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  getLength() {
    return this.backIndex - this.frontIndex;
  }
}
