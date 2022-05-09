import { Authenticator } from '../abstracts/authenticator.ts'

export class FacebookAuthenticator extends Authenticator {
  constructor (
    private _username: string,
    private _password: string
  ) {
    super()
  }

  public validate (): boolean {
    if (this._username && this._password) {
       return true 
    }
    return false
  }

  public authenticate(): void {
    if (this.validate()) {
      console.log('Authenticated using Facebook!')
    }
  }
}
