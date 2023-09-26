const suites = ["♠", "♣", "♥", "♦"]
const values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K","A"]

export const createDeck = () => {
    let cardDeck = []
    suites.forEach(suite =>{
        values.forEach(value => {
const card = [suite, value]
cardDeck.push(card)
        })
    })
    return cardDeck
}
const cardDeck = createDeck()



export const splitDeck = () => {
   const shuffleDeck = structuredClone(cardDeck).sort(()=> Math.random()-0.5)
   return shuffleDeck
   
}
//splitDeck()
const player1 = splitDeck().slice(0,26)
const player2 = splitDeck().slice(26)
console.log({player1, player2})