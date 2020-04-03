import { StyleSheet } from 'react-native'

import colors from '../../colors'
import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 40,
    fontFamily: FontFamily.medium,
    margin: 8,
  },

  participations: {
    marginHorizontal: -16,
    marginBottom: -16,
  },
})
