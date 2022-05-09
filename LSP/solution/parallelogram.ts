export abstract class Parallelogram {
  protected constructor (
    public width: number,
    public height: number
  ) {}

  get area (): number {
    return this.width * this.height
  }
}
