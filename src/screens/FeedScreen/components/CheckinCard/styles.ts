import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'

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
    backgroundColor: '#CCCCCC',
  },

  username: {
    fontSize: 16,
    color: '#272424',
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
})
