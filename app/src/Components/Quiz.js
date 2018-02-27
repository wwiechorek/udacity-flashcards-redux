import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

import Result from './Result'

class Quiz extends Component {

    componentDidMount() {
        clearLocalNotification()
        .then(setLocalNotification)
    }

    render() {
        return (
            <Result
                total={20}
                hits={19}
                />
        )
    }
}

export default Quiz
