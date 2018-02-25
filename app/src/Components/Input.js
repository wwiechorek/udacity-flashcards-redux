import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'

export default class Input extends React.Component {
    render() {
        const { onChangeText, style, value } = this.props
        return (
            <TextInput style={[ styles.input, style ]}
                onChangeText={ onChangeText }
                value={value} />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        margin: 30,
        marginTop: 10,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    },
})
