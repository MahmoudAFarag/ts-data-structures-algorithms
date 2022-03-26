// Array data structure
export class CustomArray<T> {
  private items: T[] = [];
  private count = 0;

  constructor(public length: number) {}

  insert(item: T): void {
    this.items[this.count] = item;
    this.count++;
  }

  removeAt(index: number): void {
    if (index < 0 || index >= this.count) {
      throw new Error('Index out of bound');
    }

    for (let i = index; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }

    this.count--;
  }

  print(): void {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }
}
