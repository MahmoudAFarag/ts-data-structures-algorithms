// Array data structure
class CustomArray<T> {
  private items: T[] = [];
  private count = 0;

  constructor(public length: number) {}

  insert(item: T): void {
    this.items[this.count] = item;
    this.count++;
  }

  print(): void {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }
}

const clothes = new CustomArray<string>(3);

clothes.insert('bags');
clothes.insert('dress');

clothes.print();
