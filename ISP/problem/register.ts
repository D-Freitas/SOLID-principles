export interface Register {
  validateData: () => void
  saveToDatabase: () => void
  sendToEmail: () => void
}
