import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, View, FlatList, Text } from 'react-native'
import DeckItem from '../Components/DeckItem'
import TextButton from '../Components/TextButton'


class ListDecks extends React.Component {

    render() {
        let data = []
        if(this.props.decks)
            data = Object.keys( this.props.decks )


        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                { data.length === 0 && (
                    <Text style={{ margin: 20, fontSize: 30, textAlign: 'center' }}> No decks. </Text>
                )}
                { data.length > 0 && (
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
                ) }

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
