import { UserData } from '../interfaces/user-data.ts'

export class UserRepository {
  private _users: UserData[] = []

  public list (): UserData[] {
    return this._users
  }

  public insert (user: UserData) {
    this._users.push(user)
  }
}
