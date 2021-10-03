import {CARDS, CARDS_STATUS, CARDS_REMOVE} from "../types"

export const setCards = (cards) => ({
    type: CARDS,
    payload: {
        cards,
    },
})

export const setStatus = (status) => ({
    type: CARDS_STATUS,
    payload: {
        status,
    }
})

export const removeCards = (cards) => ({
    type: CARDS_REMOVE,
    payload: {cards}
})

