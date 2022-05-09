import { UserData } from './contracts/user-data.ts'
import { Validation } from './validation.ts'
import { UserRepository } from './repositories/user-repository.ts'

export class User {
  private _name = ''
  private _email = ''
  private _age = 0 

  constructor (
    private validation: Validation,
    private userRepository: UserRepository
  ) {}

  get name (): string {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }

  get email (): string {
    return this._email
  }

  set email (email: string) {
    this._email = email
  }

  get age (): number {
    return this._age
  }

  set age (age: number) {
    this._age = age
  }

  public register (): void {
    this.validation.isValidName(this._name)
    this.validation.isValidEmail(this._email)
    this.validation.isValidAge(this._age)

    const user = {
      name: this._name,
      email: this._email,
      age: this._age
    }

    this.userRepository.insert(user)
  }

  get users (): UserData[] {
    return this.userRepository.list()
  }
}
