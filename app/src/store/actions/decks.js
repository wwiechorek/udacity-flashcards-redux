import * as api from '../../utils/api.js'

export const LOADED_DECKS = 'LOADED_DECKS'
export const LOADED_DECK = 'LOADED_DECK'
export const SAVED_DECK_TITLE = 'SAVED_DECK_TITLE'
export const SAVED_CARD_TO_DECK = 'SAVED_CARD_TO_DECK'

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
    })
}
