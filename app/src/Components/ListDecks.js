import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, View, FlatList } from 'react-native'
import DeckItem from './DeckItem'

class ListDecks extends React.Component {

    render() {
        let data = Object.keys( this.props.decks )

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={ data }
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => {
                        let deck = this.props.decks[item]
                        return <DeckItem
                                key={deck.title}
                                data={ deck }
                                handleClick={ id => {
                                    this.props.navigation.navigate(
                                        'DeckDetail',
                                        { id }
                                    )
                                }} />
                    }}
                />

            </View>
        )
    }
}

const mapStateToProps = store => ({
    decks: store.decks.data
})

const mapDispatchToProps = {
}

export default connect( mapStateToProps, mapDispatchToProps )( ListDecks )
