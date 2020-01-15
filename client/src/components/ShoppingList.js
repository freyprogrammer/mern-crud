import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

class ShoppingList extends Component {
    state = {
        datas: [
            {id: uuid(), name: 'Dante'},
            {id: uuid(), name: 'Vergil'},
            {id: uuid(), name: 'Nero'}
        ]
    }


    render() {
        const { datas } = this.state

        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name) {
                            this.setState(state => ({
                                datas: [...state.datas, {id: uuid(), name: name}]
                            }));
                        }
                    }}
                >Add Data</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {datas.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>{name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList
