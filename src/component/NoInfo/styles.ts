import { StyleSheet } from 'react-native'

import colors from '../../colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },

  content: {
    alignSelf: 'center',
    alignItems: 'center',
  },

  image: {},

  text: {
    marginTop: 36,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    marginTop: 28,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.white,
    paddingVertical: 23,
    fontSize: 18,
    textAlign: 'center',
  },
})
