import { UserRepository } from './repostiories/user-repository.ts'
import { UserData } from './interfaces/user-data.ts'

export class User {
  constructor (
    private userRepository: UserRepository
  ) {}

  public list (): UserData[] {
    return this.userRepository.list()
  }

  public insert (user: UserData) {
    this.userRepository.insert(user)
  }
}
