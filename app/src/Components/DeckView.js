import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.id
        }
    }
    render() {
        let deck = this.props.deck[this.props.navigation.state.params.id]
        return (
            <View>
                <Text style={[ styles.title ]}> {deck.title} </Text>
                <Text style={[ styles.subtitle ]}> {deck.questions.length} cards </Text>

                <TextButton style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    color: '#000',
                    borderColor: '#000',
                    marginBottom: 10,
                }}
                onPress={() => {
                    this.props.navigation.navigate(
                        'CreateCard',
                        { id: deck.title }
                    )
                }}>
                    Add Card
                </TextButton>
                <TextButton>Start Quiz</TextButton>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  title: {
      fontSize: 40,
      width: '100%',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 50
  },
  subtitle: {
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      marginBottom: 20,
      color: '#232323'
  }
})

const mapStateToProps = store => ({
    deck: store.decks.data
})

const mapDispatchToProps = {
}

export default connect( mapStateToProps, mapDispatchToProps )( DeckView )
