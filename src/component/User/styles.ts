import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.gray,
  },

  username: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
    fontFamily: FontFamily.regular,
  },
})
