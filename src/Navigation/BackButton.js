import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

import NavItemsStyle from './Styles/NavItemsStyle'
import { Colors, Metrics } from '../Themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PlatformIcon = Platform.select({
  ios: () => (
    <Ionicons name='ios-arrow-back'
      size={Metrics.icons.medium}
      color={Colors.snow}
    />
  ),
  android: () => (
    <MaterialIcons name='arrow-back'
      size={Metrics.icons.medium}
      color={Colors.snow}
    />
  )
})

export default () => (
  <TouchableOpacity onPress={NavigationActions.pop} style={NavItemsStyle.navButtonLeft}>
    <PlatformIcon />
  </TouchableOpacity>
)
