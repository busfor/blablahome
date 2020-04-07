import { AccessToken } from 'react-native-fbsdk'

import { Activity, Checkin, Participation } from '../AppPropTypes'

import { ApiRequestAuthResponseData } from './types'
import { BASE_API_URL, getRequest, postRequest } from './utils'

export const endpoints = {
  login: `${BASE_API_URL}/users`,
  activities: `${BASE_API_URL}/activities`,
  checkin: `${BASE_API_URL}/activities/%ACTIVITY_ID%/checkin`,
  activityParticipations: `${BASE_API_URL}/activities/%ACTIVITY_ID%/participations`,
  userParticipations: `${BASE_API_URL}/users/%USER_ID%/participations`,
  checkins: `${BASE_API_URL}/checkins`,
  participationCheckins: `${BASE_API_URL}/participations/%PARTICIPATION_ID%/checkins`,
}

/**
 * Login with fb accessToken
 * @param accessToken - Facebook access token
 */
export const requestAuth = (accessToken: string) =>
  postRequest<ApiRequestAuthResponseData>(endpoints.login, {
    access_token: accessToken,
  })

/**
 * Fetch activities
 */
export const fetchActivities = () => getRequest<Activity[]>(endpoints.activities, {})

/**
 * Fetch participations for user
 * @param userId - user ID
 */
export const fetchParticipationsForUser = (userId: string) =>
  getRequest<Participation[]>(endpoints.userParticipations.replace('%USER_ID%', userId))

/**
 * Fetch participations for activity
 * @param activityId - activity identifier
 */
export const fetchParticipations = (activityId: string) =>
  getRequest<Participation[]>(endpoints.activityParticipations.replace('%ACTIVITY_ID%', activityId), {})

export const fetchParticipationCheckins = (participaionId: string) =>
  getRequest<Checkin[]>(endpoints.participationCheckins.replace('%PARTICIPATION_ID%', participaionId), {})

/**
 * Join to the activity
 * @param activityId - activity identifier
 */
export const joinActivitity = async (activityId: string) => {
  const accessTokenData = await AccessToken.getCurrentAccessToken()
  const token = accessTokenData?.accessToken || ''
  return postRequest<Participation>(
    endpoints.activityParticipations.replace('%ACTIVITY_ID%', activityId),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const checkin = async (activityId: string) => {
  const accessTokenData = await AccessToken.getCurrentAccessToken()
  const token = accessTokenData?.accessToken || ''
  return postRequest<Participation>(
    endpoints.checkin.replace('%ACTIVITY_ID%', activityId),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

/**
 * Fetch check-ins
 */
export const fetchCheckins = () => getRequest<Checkin[]>(endpoints.checkins, {})
