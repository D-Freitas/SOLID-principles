export interface RegisterUserInterface {
  validateData: () => void
  saveToDatabase: () => void
  sendToEmail: () => void
}
