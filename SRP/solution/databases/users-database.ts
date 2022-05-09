import { UserData } from '../contracts/user-data.ts'

export class UsersDatabase {
  private _users: UserData[] = []

  public getUser (): UserData[] {
    return this._users
  }

  public insertUser (user: UserData): void {
    this._users.push(user)
  }
}
