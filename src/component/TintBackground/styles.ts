import { StyleSheet } from 'react-native'

import colors from '../../colors'

export default StyleSheet.create({
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.45,
  },
})
