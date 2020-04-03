import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

const BUTTON_HEIGHT = 50

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20,
    paddingBottom: 20 + BUTTON_HEIGHT,
  },

  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
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
    backgroundColor: '#FFF',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },

  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})
