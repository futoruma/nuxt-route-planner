export interface Queue {
  enqueue(item: any): void;

  dequeue(): any;

  getLength(): Number;
}
