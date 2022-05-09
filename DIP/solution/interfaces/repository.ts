import { UserData } from '../interfaces/user-data.ts'

export interface Repository {
  list: () => UserData[]
  insert: (user: UserData) => void
}
