import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class TextButton extends React.Component {
    render() {
        const { onPress, style, children } = this.props
        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={[ styles.btn, style ]}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 0,
        backgroundColor: '#000',
        color: 'white',
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden'
    }
})
