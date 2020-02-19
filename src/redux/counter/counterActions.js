import {
    INCREASE,
    DECREASE
} from './counterTypes'
export const increase = () => {
    return {
        type:INCREASE
    }
}
export const decrease = () => {
    return {
        type:DECREASE
    }
}
