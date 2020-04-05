import { AccessToken } from 'react-native-fbsdk'

import { Activity, Participation } from '../AppPropTypes'

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

/**
 * Fetch participations for user
 * @param userId - user ID
 */
export const fetchParticipationsForUser = (userId: string) =>
  getRequest<Participation[]>(`${BASE_API_URL}/users/${userId}/participations`)

/**
 * Fetch activities
 * @param activityId - activity identifier
 */
export const fetchParticipations = (activityId: string) =>
  getRequest<Participation[]>(`${BASE_API_URL}/activities/${activityId}/participations`, {})

/**
 * Join to the activity
 * @param activityId - activity identifier
 */
export const joinActivitity = async (activityId: string) => {
  const accessTokenData = await AccessToken.getCurrentAccessToken()
  const token = accessTokenData?.accessToken || ''
  return postRequest<Participation>(
    `${BASE_API_URL}/activities/${activityId}/participations`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
