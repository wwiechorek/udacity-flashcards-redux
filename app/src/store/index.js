import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const enhancers = []

const middleware = [
  thunk
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose (
    applyMiddleware( ...middleware ),
    ...enhancers
)

const store = createStore(
    reducers,
    composedEnhancers
)

export default store
