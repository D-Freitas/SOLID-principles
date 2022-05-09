import { Rectangle } from './rectangle.ts'

export class Square extends Rectangle {
  public setWidth (value: number) {
    this.width = this.height = value
  }

  public setHeight (value: number) {
    this.width = this.height = value
  }
}
