import { UserData } from '../contracts/user-data.ts'
import { UsersDatabase } from '../databases/users-database.ts'
import { Repository } from '../contracts/repository.ts'

export class UserRepository implements Repository {
  constructor (
    private usersDatabase: UsersDatabase
  ) {}

  public list (): UserData[] {
    return this.usersDatabase.getUser()
  }

  public insert (user: UserData): void {
    this.usersDatabase.insertUser(user) 
  }

  public update () {}

  public remove () {}
}
