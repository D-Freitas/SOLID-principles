export class Login {
  public authenticateUser (authenticationType: string) {
    if (authenticationType === 'google') {
     console.info('authenticated using Google')
    }

    if (authenticationType === 'facebook') {
      console.info('authenticated using Facebook')
    }
  }
}
