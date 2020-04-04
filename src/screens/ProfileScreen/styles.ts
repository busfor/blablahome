import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

const BUTTON_HEIGHT = 50

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  container: {
    paddingTop: 16,
    paddingBottom: 16 + BUTTON_HEIGHT,
  },

  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.gray,
  },

  username: {
    flex: 1,
    fontSize: 32,
    fontFamily: FontFamily.medium,
  },

  fbButton: {
    width: BUTTON_HEIGHT * 4,
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },

  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
