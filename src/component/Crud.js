import React, {Component} from 'react'
import Form from '../component/Form'
import CardList from './CardsList/CardList'
import store from '../redux/store'
import {Provider} from 'react-redux'

class Crud extends Component{

    render() {
        return(
            <Provider store = {store}>
                <Form />
                <CardList />
            </Provider>
        )
    }
}
export default Crud