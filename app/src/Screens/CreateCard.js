import React from 'react'
import { connect } from 'react-redux'
import { addCardToDeck } from '../store/actions/decks'

import { StyleSheet, Text, View } from 'react-native'
import { yellow, black, white } from '../utils/_color'
import TextButton from '../Components/TextButton'
import Input from '../Components/Input'

class CreateDeck extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add card in: ' + navigation.state.params.id
        }
    }

    state = {
        question: '',
        question: '',
    }

    onSubmit() {
        const { question, answer } = this.state
        if(question === '' || answer === '') return


        let deckId = this.props.navigation.state.params.id
        this.props.addCardToDeck({
                deck: deckId,
                question: this.state.question,
                answer: this.state.answer
            })
        .then( () => {
            this.props.navigation.goBack()
        })
        this.setState({
            question: '',
            answer: ''
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={ styles.title }>Add card in deck</Text>

                <Input
                    placeholder='Question'
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question} />

                <Input
                    placeholder='Answer'
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer} />

                <TextButton
                    onPress={() => this.onSubmit() }
                    style={{ backgroundColor: yellow, color: black }}> Submit </TextButton>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    title: {
        fontSize: 40,
        textAlign: 'center',
        margin: 30,
        marginTop: 50
    }
})

const mapStateToProps = store => ({
})

const mapDispatchToProps = {
    addCardToDeck
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateDeck )
