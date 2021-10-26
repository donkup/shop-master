export class Item {
  public constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public discount: number = 0
  ) {
  }

  public get priceWithDiscount(): number {
    return this.price - (this.price * (this.discount / 100));
  }
}
