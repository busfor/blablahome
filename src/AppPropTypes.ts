export interface User {
  id: string
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

export interface Participation {
  id: string
  progress: number
  completed_at: string | null
  user: User
  activity: Activity
}

export type EventStatus = 'started' | 'progressing' | 'done'

export interface Event {
  id: number
  commitment: Participation
  status: EventStatus
}
