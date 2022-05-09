import { GoogleAuthenticator, FacebookAuthenticator } from './authenticators/index.ts'

class Solution {
  public static main (): void {
    const googleAuthenticator = new GoogleAuthenticator('commeta42', '12345abcde')
    const facebookAuthenticator = new FacebookAuthenticator('commeta42', '12345abcde')
    googleAuthenticator.authenticate()
    facebookAuthenticator.authenticate()
  }
}

Solution.main()
