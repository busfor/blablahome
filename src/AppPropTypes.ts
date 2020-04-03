export interface User {
  id: number
  name: string
}

export interface Picture {
  url: string
  width: number
  height: number
}

export interface Activity {
  id: string
  user: User
  name: string
  description: string
  cover: string
  participants_count: number
  completions_count: number
  fails_count: number
  days: number
}

export interface Comment {
  id: number
  author: User
  body: string
}

export interface Commitment {
  id: number
  user: User
  activity: Activity
  estimate?: Date
  comments: Comment[]
}

export type EventStatus = 'started' | 'progressing' | 'done'

export interface Event {
  id: number
  commitment: Commitment
  status: EventStatus
}

export interface Participation {
  id: string // 'c59c229e-3a53-462c-b4e2-2d41c07f59b3'
  progress: number // 0
  completed_at: string | null // null
  user: User
  activity: Activity
}
