import { Repository } from '../interfaces/repository.ts'
import { UserData } from '../interfaces/user-data.ts'

export class UserRepository implements Repository {
  private _users: UserData[] = []

  public list (): UserData[] {
    return this._users
  }

  public insert (user: UserData) {
    this._users.push(user)
  }
}
