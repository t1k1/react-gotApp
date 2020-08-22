import React, {Component} from 'react';
import styled from 'styled-components';

const ItemListUl = styled.ul`
    cursor: pointer;
`;

const ItemListLi = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ItemListUl className="list-group">
                <ItemListLi>
                    John Snow
                </ItemListLi>
                <ItemListLi>
                    Brandon Stark
                </ItemListLi>
                <ItemListLi>
                    Geremy
                </ItemListLi>
            </ItemListUl>
        );
    }
}