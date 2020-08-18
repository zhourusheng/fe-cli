export interface actionType {
  [key: string] : {
    description: string
    alias: string
  }
}

export interface promptItem {
  type: string,
  name: string,
  message: string,
  choices?: string[]
}