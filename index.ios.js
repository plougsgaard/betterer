import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/Root'
import './src/Config/ReactotronConfig'
import configureStore from './src/Store/Store'

// Handling store here to avoid hot-reloading issues
const store = configureStore()
class RNBase extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('Betterer', () => RNBase)
