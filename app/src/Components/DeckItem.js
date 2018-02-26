import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { white } from '../utils/_color'


export default class DeckItem extends Component {

    render() {
        const { title, questions } = this.props.data
        return (
            <TouchableOpacity onPress={ () => this.props.handleClick(title) }>
                <View style={ styles.item }>
                    <Text style={ styles.title }>
                        {title}
                    </Text>
                    <Text style={ styles.subtitle }>
                        {questions.length} cards
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 12,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  title: {
      fontSize: 40,
      width: '100%',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20
  },
  subtitle: {
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      marginBottom: 20
  }
})
