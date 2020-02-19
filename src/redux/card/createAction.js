import {CREATE,REMOVE, UPDATE} from './cardTypes';
import uuid from 'uuid'

export const createCard = (e,val) => {
  e.preventDefault();
  let card = {};
  const id = uuid() 
  card[id] = {
      name: val
  }
  
    return { 
        type: CREATE,
        card:card
    }
}
export const removeCard = (id) =>{
    return {
        type:REMOVE,
        id:id
    }
}
export const editCard = (id,status,val) => {
       return {
           type:UPDATE,
           id:id,
           val:val
       }  
}