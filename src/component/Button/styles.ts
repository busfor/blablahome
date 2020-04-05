import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },

  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: colors.white,
  },
})
