import * as api from '../../utils/api.js'

export const LOADED_DECKS = 'LOADED_DECKS'
export const SAVED_DECK_TITLE = 'SAVED_DECK_TITLE'
export const SAVED_CARD_TO_DECK = 'SAVED_CARD_TO_DECK'
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA'

export const getDecks = () => dispatch => {
    return api.getDecks()
    .then( decks => {
        dispatch({
            type: LOADED_DECKS,
            payload: decks
        })
    })
}

export const saveDeckTitle = title => dispatch => {
    return api.saveDeckTitle( title )
    .then( deck => {
        dispatch({
            type: SAVED_DECK_TITLE,
            payload: deck
        })

        return deck
    })
}

export const addCardToDeck = ({ deck, question, answer }) => dispatch => {
    let card = { question, answer }
    return api.saveCardToDeck( deck, card )
    .then( () => {
        dispatch({
            type: SAVED_CARD_TO_DECK,
            payload: {
                deck,
                card
            }
        })
    })
}

export const clearAll = () => dispatch => {
    return api.clear()
    .then( () => {
        dispatch({
            type: CLEAR_ALL_DATA
        })
    })
}
