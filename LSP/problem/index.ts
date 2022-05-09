import { Square } from './square.ts'
import { Rectangle } from './rectangle.ts'

class Problem {
  private static showRectangleArea (rect: Rectangle): void {
    console.log("Rectangle area calc\n")
    console.log(`${rect.width} * ${rect.height}\n`)
    console.log(rect.area)
  }

  public static main (): void {
    const square = new Square()
    square.setWidth(10)
    square.setHeight(20)

    this.showRectangleArea(square)
  }
}

Problem.main()
