import React from 'react'
import { connect } from 'react-redux'
import { getDecks } from './store/actions/decks'

import {
        View,
        StatusBar,
        Platform
    } from 'react-native'
import { Constants } from 'expo'

import { TabNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import ListDecks from './Components/ListDecks'
import CreateDeck from './Components/CreateDeck'
import { setLocalNotification } from './utils/helpers'
import { yellow, black, gray, white } from './utils/_color'

const Tabs = TabNavigator({
  List: {
    screen: () => <ListDecks />,
    navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: () => <FontAwesome name='th-list' size={30} color={black} />
    }
  },
  Create: {
    screen: () => <CreateDeck />,
    navigationOptions: {
        tabBarLabel: 'New deck',
        tabBarIcon: () => <FontAwesome name='file' size={30} color={black} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? black : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : gray,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

class Index extends React.Component {
    componentDidMount() {
        this.props.getDecks()
        setLocalNotification()
    }

    render() {
        const statusBarBackground = yellow
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: statusBarBackground, height: Constants.statusBarHeight }}>
                  <StatusBar
                      translucent
                      backgroundColor={statusBarBackground}
                      barStyle="light-content" />
                </View>
                <Tabs />
            </View>
        )
    }
}

const mapStateToProps = store => ({
})

const mapDispatchToProps = {
  getDecks
}

export default connect( mapStateToProps, mapDispatchToProps )( Index )
