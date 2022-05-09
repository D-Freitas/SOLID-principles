import { UserData } from './user-data'

export interface Repository {
  list: () => UserData[]
  insert: (user: UserData) => void
  update: () => void
  remove: () => void
}
