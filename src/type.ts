import template from './template'

export interface actionType {
  [key: string]: {
    description: string
    alias: string
  }
}

export interface promptItem {
  type: string
  name: string
  message: string
  choices?: string[]
}

export interface templateItem {
  key: string
  name: string
  url: string
}
