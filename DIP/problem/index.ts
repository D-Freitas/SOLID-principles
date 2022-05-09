import { UserRepository } from './repostiories/user-repository.ts'
import { User } from './user.ts'

class Problem {
  public static main (): void {
    const userRepository = new UserRepository()
    const user = new User(userRepository)
    user.insert({
      name: 'commeta47',
      password: '1235a'
    })
    console.table(user.list())
  }
}

Problem.main()
