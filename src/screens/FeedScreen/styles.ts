import { StyleSheet } from 'react-native'

import colors from '../../colors'
import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.white,
    flex: 1,
  },

  title: {
    fontSize: 40,
    fontFamily: FontFamily.medium,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },

  scrollViewContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
})
