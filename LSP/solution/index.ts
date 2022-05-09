import { Parallelogram } from './parallelogram.ts'
import { Rectangle } from './rectangle.ts'
import { Square } from './square.ts'

class Solution {
  private static showArea (parallelogram: Parallelogram): void {
    console.log("Show area calc\n")
    console.log(parallelogram.area)
  }

  public static main (): void {
    const rectangle = new Rectangle(5, 10)
    const square = new Square(10, 10)
    this.showArea(rectangle)
    this.showArea(square)
  }
}

Solution.main()
