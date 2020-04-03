import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    marginHorizontal: 16,
    marginTop: 12,
    height: 64,
    backgroundColor: '#F6F5F5',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#F6F5F5',
    borderRadius: 8,
  },

  selectedItem: {
    borderColor: 'rgb(0,122,255)',
  },

  label: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: '#000000',
  },
})
