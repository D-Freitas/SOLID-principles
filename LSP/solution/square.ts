import { Parallelogram } from './parallelogram.ts'

export class Square extends Parallelogram {
  constructor (width: number, height: number) {
    super(width, height)

    if (width !== height) {
      throw new Error('both sides must be equal')
    }
  }
}
