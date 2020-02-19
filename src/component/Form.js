import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {createCard} from  '../redux/card/createAction';


class Form extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    render() {
        
        return (
            <form 
            onSubmit = { (e) => {
                this.props.onSubmit(e,this.myRef.current.value) 
                this.myRef.current.value = ''
                }}>
              <input type="text" ref={this.myRef}/>
              <button type="submit" >send</button>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e,val) => dispatch(createCard(e,val))
    }
}

export default connect(
null,
    mapDispatchToProps
)(Form) ;