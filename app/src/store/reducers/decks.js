import {
    LOADED_DECKS,
    SAVED_DECK_TITLE,
    SAVED_CARD_TO_DECK,
    CLEAR_ALL_DATA
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

        case SAVED_CARD_TO_DECK: {
            let deck = state.data[payload.deck]
            deck.questions.push(payload.card)

            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.deck]: deck
                }
            }
        }

        case CLEAR_ALL_DATA: {
            return {
                data: {}
            }
        }

        default:
            return state
    }
}
