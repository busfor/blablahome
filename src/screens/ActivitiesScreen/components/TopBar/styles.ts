import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    paddingTop: 48,
    padding: 20,
  },

  infoTitle: {
    fontFamily: FontFamily.medium,
    fontSize: 24,
  },

  infoText: {
    fontFamily: FontFamily.regular,
    fontSize: 15,
    marginTop: 8,
  },

  infoContainer: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 8,
    padding: 20,
    paddingRight: 100,
    overflow: 'hidden',
  },

  virusContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFC820',
    position: 'absolute',
    bottom: -10,
    right: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
