import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    marginVertical: 6,
  },

  participationInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  progression: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderColor: '#CCCCCC',
    borderWidth: 3,
  },

  title: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    marginLeft: 8,
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  progress: {
    fontSize: 20,
    fontFamily: FontFamily.regular,
  },

  spacer: {
    paddingHorizontal: 4,
  },
})
