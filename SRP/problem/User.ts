import { UserData } from './contracts/user-data.ts'

export class User {
  private _users: UserData[] = []

  private _name = ''
  private _email = ''
  private _age = 0 

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
    if (this._name === null || this._name === undefined) {
      throw new Error('Invalid user.')
    }

    if (this._email === null ||
        this._email === undefined ||
        this._email.includes('@') === false) {
      throw new Error('Invalid email.')
    }

    if (this._age === null || this._age === undefined) {
      throw new Error('Invalid age.')
    }

    this._users.push({
      name: this._name,
      email: this._email,
      age: this._age
    })
  }

  get users (): UserData[] {
    return this._users
  }
}
