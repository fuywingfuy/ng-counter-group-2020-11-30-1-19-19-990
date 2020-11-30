export class Counter {
  public counter: number;

  constructor(counter: number = 0) {
    this.counter = counter;
  }

  public increase(): void {
    this.counter++;
  }

  public decrease(): void {
    this.counter--;
  }
}
