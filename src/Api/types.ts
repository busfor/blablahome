import { User } from '../AppPropTypes'

export interface ApiFetchActivitiesResponseData {
  id: string
  name: string
  description: string
  cover: string
  days: number
}

export interface ApiRequestAuthResponseData {
  user: User
}
