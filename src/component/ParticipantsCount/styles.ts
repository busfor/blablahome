import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  countContainer: {
    flex: 1,
  },

  count: {
    fontSize: 18,
    color: '#535353',
    fontFamily: FontFamily.medium,
  },

  countDescription: {
    fontSize: 14,
    color: '#535353',
    marginTop: 2,
    fontFamily: FontFamily.regular,
  },
})
