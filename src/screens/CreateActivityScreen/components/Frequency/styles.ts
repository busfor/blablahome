import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    marginHorizontal: 16,
    marginTop: 12,
    height: 64,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.backgroundColor,
    borderRadius: 8,
  },

  selectedItem: {
    borderColor: 'rgb(0,122,255)',
  },

  label: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: colors.black,
  },
})
