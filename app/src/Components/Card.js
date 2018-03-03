import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextButton from './TextButton'
import { red, green } from '../utils/_color'

class Card extends Component {
    state = {
        showAnswer: false,
        question: '',
        answer: '',
    }


    componentWillReceiveProps( nextProps ) {
        if(nextProps.data && nextProps.data !== this.props.data) {
            this.setState({
                showAnswer: false,
                question: nextProps.data.question,
                answer: nextProps.data.answer
            })
        }
    }

    render() {

        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex:1,
            }}>

                <Text style={{
                    marginTop: 20,
                    fontSize: 35,
                    textAlign: 'center'
                }}> {this.state.question} </Text>

                { this.state.showAnswer && (
                    <Text style={{fontSize: 20, marginTop: 10, marginBottom: 10}}>
                        <Text style={{ fontWeight: 'bold', color: red }} >A:</Text> <Text> {this.state.answer} </Text>
                    </Text>
                )}

                { !this.state.showAnswer && (
                    <TextButton style={{
                        backgroundColor: 'transparent',
                        color: red,
                        borderColor: 'transparent',
                        fontWeight: 'bold',
                    }}
                    onPress={ () => this.setState({
                        showAnswer: true
                    })}> Answer </TextButton>
                )}

                { this.state.showAnswer && (
                    <View style={{ width: '90%' }}>
                        <TextButton
                            onPress={ () => this.props.handleAnswered(1) }
                            style={{
                                color: 'white',
                                backgroundColor: green,
                                marginTop: 20
                            }}> Correct </TextButton>

                        <TextButton
                            onPress={ () => this.props.handleAnswered(0) }
                            style={{
                                color: 'white',
                                backgroundColor: red,
                                marginTop: 10
                            }}> Incorrect </TextButton>
                    </View>
                ) }

            </View>
        )
    }

}

export default Card
