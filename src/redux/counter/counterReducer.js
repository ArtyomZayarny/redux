import {INCREASE,DECREASE} from './counterTypes'
const initState = {
    num: 10
}


const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case INCREASE: return { num: state.num + 1}
        case DECREASE: return { num: state.num - 1}
        default: return state
    }
}

export default counterReducer;