import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Index from './src/index'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}
