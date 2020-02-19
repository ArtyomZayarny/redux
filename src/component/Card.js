import React, {useState} from 'react'
import {connect} from 'react-redux';
import {removeCard, editCard} from '../redux/card/createAction'

const Card = (props) => {
 const {card} = props;
 const id = props.id;
 
 let[val,setVal] = useState(card[id].name);
 let[status,setStatus] = useState('')

 let editBtnName = status === 'edit' ? 'save' : 'edit';
    return (
            <div>
                <h2>{card[id].name}</h2>
                {status === 'edit' && 
                <p><input  type="text" onChange={(e) =>{setVal(e.target.value)}} value={val}/></p>}
                { status === '' &&
                <button
                    onClick = { () => setStatus('edit')}
                    >{editBtnName}</button> }
                {status === 'edit' && 
                <button
                    onClick = { () => {
                        setStatus('')
                        props.editCard(id,'',val)}}
                    >{editBtnName}</button> }

                <button
                  onClick={ () =>{props.removeCard(id)}}
                >remove</button>
            </div>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        removeCard: (id) => {dispatch(removeCard(id))},
        editCard: (id,status,val) => {dispatch(editCard(id,status,val))}
    
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);