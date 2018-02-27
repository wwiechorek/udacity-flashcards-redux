import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEYS = 'FlashCards:decks'

export const clear = () =>
AsyncStorage.clear()

export const getDecks = () =>
    AsyncStorage.getItem( DECKS_STORAGE_KEYS )
        .then( store => JSON.parse(store))


export const getDeck = id =>
    getDecks()
    .then( decks => decks[id] )

export const saveDeckTitle = title => {
    if(!title) return

    return getDecks()
        .then( decks => {
            decks = !decks ? {} : decks

            decks[title] = {
                title,
                questions: []
            }

            return AsyncStorage.setItem( DECKS_STORAGE_KEYS, JSON.stringify(decks) )
            .then( decks => {
                return getDeck( title )
            } )
        })
}


export const saveCardToDeck = (title, card) => {
    return getDeck(title)
    .then( deck => {
        deck.questions.push(card)

        getDecks()
        .then(decks => {
            decks[title] = deck
            AsyncStorage.setItem(DECKS_STORAGE_KEYS, JSON.stringify(decks))
        })
    })
}
