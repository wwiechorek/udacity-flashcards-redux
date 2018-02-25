import {
    LOADED_DECKS,
    SAVED_DECK_TITLE,
} from '../actions/decks'

const initialState = {
    data: {}
}

export default ( state = initialState, action ) =>  {
    const { type, payload } = action
    switch (type) {
        case LOADED_DECKS: {
            return {
                ...state,
                data: payload
            }
        }

        case SAVED_DECK_TITLE: {
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.title]: payload
                }
            }
        }

        default:
            return state
    }
}
