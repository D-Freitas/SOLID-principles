import { RegisterUser } from './register-user.ts'
import { RegisterProduct } from './register-product.ts'

class Solution {
  public static main (): void {
    const registerUser = new RegisterUser()
    registerUser.validateData()
    registerUser.saveToDatabase()
    registerUser.sendToEmail()
    
    const registerProduct = new RegisterProduct()
    registerProduct.validateData()
    registerProduct.saveToDatabase()
  }
}

Solution.main()
