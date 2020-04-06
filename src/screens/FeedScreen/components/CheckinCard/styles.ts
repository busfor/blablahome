import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    marginBottom: 32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: colors.gray,
  },

  username: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
    fontFamily: FontFamily.regular,
  },

  activity: {
    marginTop: 5,
    paddingLeft: 39,
  },

  activityText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  photos: {
    marginTop: 12,
    paddingLeft: 39,
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  message: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: colors.black,
    marginTop: 8,
    marginLeft: 39,
  },

  quote: {
    fontFamily: FontFamily.medium,
    fontSize: 24,
  },
})
