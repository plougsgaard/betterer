import React, { PropTypes, Component } from 'react'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import DrawerContent from '../Containers/DrawerContent'
import { connect } from 'react-redux'
import Styles from './Styles/NavigationDrawerStyle'

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  static propTypes = {
    navigationState: PropTypes.object
  }

  render () {
    const { key, open, children } = this.props.navigationState
    return (
      <Drawer
        ref='navigation'
        open={open}
        onOpen={() => NavigationActions.refresh({ key, open: true })}
        onClose={() => NavigationActions.refresh({ key, open: false })}
        content={<DrawerContent />}
        styles={Styles}
        tapToClose
        type='overlay'
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3} // magic number?
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
