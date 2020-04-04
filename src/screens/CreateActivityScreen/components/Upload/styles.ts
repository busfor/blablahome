import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  touchable: {
    backgroundColor: colors.backgroundColor,
    width: '100%',
    height: 220,
    borderWidth: 1,
    borderColor: colors.grayText,
    borderRadius: 8,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  label: {
    marginLeft: 20,
    fontFamily: FontFamily.regular,
    fontSize: 20,
  },

  selectedImage: {
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
    width: '100%',
    height: 245,
    marginBottom: 20,
  },
})
