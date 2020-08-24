import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemListUl = styled.ul`
    cursor: pointer;
`;

const ItemListLi = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map((item) =>{
            const {id, name} = item;
            return (
                <ItemListLi 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(id)}>
                    {name}
                </ItemListLi>
            )
        })
    }

    render() {

        const {charList, error} = this.state;

        if(!charList){
            return <Spinner/>
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const items = this.renderItems(charList);

        return (
            <ItemListUl className="list-group">
                {errorMessage}
                {items}
            </ItemListUl>
        );
    }
}