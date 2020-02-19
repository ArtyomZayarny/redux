import {CREATE, REMOVE, UPDATE} from './cardTypes'

const initState = {
    cards:[],
    status:'',
    id:''
}

const removeCard = (state,id) => {
    let cards = state.cards.filter( (card) => {
      if(Object.keys(card)[0] !== id ) {
          return card
      }
    });
    return cards
}

const updateCard = (state,action) => {
    
    let updateCards = state.cards.map( (card) => {
        let id = Object.keys(card)[0];
        if (action.id === id) {
            card[id].name = action.val
        }
        return card
        
    })
    return state.cards
}


const cardReducer = (state = initState,action) => {  

    
     let newCard = action.card;
    let cards = state.cards.slice();
    cards.push(newCard)
    switch(action.type) {
        case CREATE: return {cards:cards, status:''}
        break;
        case REMOVE:return {cards:removeCard(state, action.id),status:''}
        break;
        case UPDATE: return {cards:updateCard(state,action)}
        break;
            
        default: return state;
    }

} 
export default cardReducer