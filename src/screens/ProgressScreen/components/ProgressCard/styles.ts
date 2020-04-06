import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginVertical: 6,
  },

  participationInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: colors.black,
    fontSize: 18,
    fontFamily: FontFamily.regular,
    marginLeft: 8,
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  progress: {
    color: colors.black,
    fontSize: 20,
    fontFamily: FontFamily.regular,
  },

  activeProgress: {
    color: colors.primary,
  },

  spacer: {
    paddingHorizontal: 4,
  },
})
