import React, {Component} from 'react'
import {connect} from 'react-redux';
import {increase,decrease} from '../redux'


class Counter extends Component {

    render() {
        return(

            <>
                <button
                    onClick = {this.props.minus}
                >-</button>
                <input 
                    type="text" 
                    value = {this.props.num}/>
                <button
                    onClick = {this.props.plus}
                >+</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        num:state.num
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        plus: () => {dispatch(increase())},
        minus: () => dispatch(decrease())
    }
}
export default connect(
    mapStateToProps,
    mapDispathToProps
)(Counter) 