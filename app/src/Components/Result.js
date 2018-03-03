import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'

import { yellow, green, red } from '../utils/_color'

class Result extends Component {
    state = {
        fontSize: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.state.fontSize, { toValue: 120, duration: 300 })
            .start()
    }

    render() {
        const { fontSize } = this.state
        const { hits, total } = this.props
        let percent = 100 / total * hits

        let color = percent < 50 ? red : percent > 75 ?  green : yellow

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Você acertou {hits}/{total} questões</Text>
                <Text>Oproveitamento de </Text>
                <Animated.Text style={{
                    fontSize,
                    color
                }}>{percent}%</Animated.Text>
            </View>
        )
    }
}

export default Result
