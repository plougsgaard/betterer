import { Platform, StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: Platform.select({
    ios: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: Metrics.doubleBaseMargin,
      marginLeft: Metrics.baseMargin,
      width: Metrics.icons.medium
    },
    android: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: Metrics.baseMargin,
      width: Metrics.icons.medium
    }
  })
})
