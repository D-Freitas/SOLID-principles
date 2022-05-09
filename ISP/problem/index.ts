import { RegisterUser } from './register-user.ts'
import { RegisterProduct } from './register-product.ts'

class Problem {
  public static main (): void {
    const registerUser = new RegisterUser()
    registerUser.validateData()
    registerUser.saveToDatabase()
    registerUser.sendToEmail()
    const registerProduct = new RegisterProduct()
    registerProduct.validateData()
    registerProduct.saveToDatabase()
    // [???]
    registerProduct.sendToEmail()
    // product has no email
  }
}

Problem.main()
