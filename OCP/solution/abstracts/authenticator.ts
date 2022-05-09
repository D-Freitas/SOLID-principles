export abstract class Authenticator {
  public abstract validate (): boolean
  public abstract authenticate(): void
}
