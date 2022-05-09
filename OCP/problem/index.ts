import { Login } from "./login.ts"

class Problem {
  public static main (): void {
    const login = new Login()
    login.authenticateUser('google')
  }
}

Problem.main()
