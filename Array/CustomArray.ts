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

  indexOf(item: T) {
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] === item) {
        return i;
      }
    }

    return -1;
  }

  print(): void {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }
}
