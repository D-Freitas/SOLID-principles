export class Validation {
  public isValidName (name: string): void {
    const isValid = name !== null && name !== undefined
    if (!isValid) {
      throw new Error('Invalid name.')
    }
  }

  public isValidEmail (email: string): void {
    const isValid =
      email !== null &&
      email !== undefined &&
      email.includes('@')
    if (!isValid) {
      throw new Error('Invalid email.')
    }
  }

  public isValidAge (age: number): void {
    const isValid = age !== null && age !== undefined
    if (!isValid) {
      throw new Error('Invalid age.')
    }
  }
}
