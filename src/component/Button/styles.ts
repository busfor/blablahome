import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: colors.backgroundColor,
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
    color: colors.black,
  },
})
