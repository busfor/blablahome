import { Activity } from '../AppPropTypes'

import { ApiRequestAuthResponseData } from './types'
import { BASE_API_URL, getRequest, postRequest } from './utils'

/**
 * Login with fb accessToken
 * @param accessToken - Facebook access token
 */
export const requestAuth = (accessToken: string) =>
  postRequest<ApiRequestAuthResponseData>(`${BASE_API_URL}/users`, {
    access_token: accessToken,
  })

/**
 * Fetch activities
 */
export const fetchActivities = () => getRequest<Activity[]>(`${BASE_API_URL}/activities`, {})
