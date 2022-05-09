import { User } from './user.ts'
import { Validation } from './validation.ts'
import { UserRepository } from './repositories/user-repository.ts'
import { UsersDatabase } from './databases/users-database.ts'

class Solution {
  public static main (): void {
    const validation = new Validation()
    const usersDatabase = new UsersDatabase()
    const userRepository = new UserRepository(usersDatabase)
    const user = new User(validation, userRepository)

    user.name = 'robert'
    user.email = 'robert@gmail.com'
    user.age = 42
    user.register()

    console.table(user.users)
  }
}

Solution.main()
