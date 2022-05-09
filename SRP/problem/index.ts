import { User } from './User.ts'

class Problem {
  public static main (): void {
    const user = new User()
    user.name = 'robert'
    user.email = 'robert@gmail.com'
    user.age = 42
    user.register()
    console.table(user.users)
  }
}

Problem.main()
