export interface User {
  id: number
  name: string
}

export interface Picture {
  url: string
  width: number
  height: number
}

export interface Idea {
  id: number
  author: User
  title: string
  description: string
  pictures?: Picture[]
  participants: User[]
  completed: number
  frequent: boolean
  frequency: number
}

export interface Comment {
  id: number
  author: User
  body: string
}

export interface Commitment {
  id: number
  user: User
  idea: Idea
  estimate?: Date
  comments: Comment[]
}

export type EventStatus = 'started' | 'progressing' | 'done'

export interface Event {
  id: number
  commitment: Commitment
  status: EventStatus
}
