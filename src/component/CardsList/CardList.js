import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '../Card'



class CardList extends Component {
  
    render() {

        let cardsList = this.props.cards.map( (item,index) => { 
            let id = Object.keys(item)[0];
            return (
               <Card key={id} card={item} id={id} />
            )
        })
        return (
            <div className="cards-list">
               {cardsList}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cards:state.cards
    }
}

export default connect(mapStateToProps)(CardList);