import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

import Result from '../Components/Result'
import Card from '../Components/Card'

class Quiz extends Component {

    state = {
        current: 0,
        cards: [],
        points: 0
    }

    componentDidMount() {
        let deck = this.props.decks[this.props.navigation.state.params.id]

        clearLocalNotification()
        .then(setLocalNotification)

        this.setState({
            current: 1,
            cards: deck.questions
        })

    }

    handleAnswered(points) {
        this.setState({
            points: this.state.points + points,
            current: this.state.current + 1
        })
    }

    render() {
        let cardData = this.state.cards[this.state.current-1]

        return (
            <View style={{flex:1}}>
                { this.state.current <= this.state.cards.length && (
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontSize: 18,
                            margin: 4,
                            position: 'absolute'
                        }}>{this.state.current} / {this.state.cards.length}</Text>

                        <Card
                            data={ cardData }
                            handleAnswered={ points => this.handleAnswered(points) }
                             />
                    </View>

                 )}
                 { this.state.current > this.state.cards.length && (
                    <Result
                        total={this.state.cards.length}
                        hits={this.state.points}
                        />
                )}
            </View>
        )
    }
}

const mapStateToProps = store => ({
    decks: store.decks.data
})

const mapDispatchToProps = {
}

export default connect( mapStateToProps, mapDispatchToProps )( Quiz )
