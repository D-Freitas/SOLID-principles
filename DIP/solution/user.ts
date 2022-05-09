import { Repository } from './interfaces/repository.ts'
import { UserData } from './interfaces/user-data.ts'

export class User {
  constructor (
    private userRepository: Repository
  ) {}

  public list (): UserData[] {
    return this.userRepository.list()
  }

  public insert (user: UserData) {
    this.userRepository.insert(user)
  }
}
