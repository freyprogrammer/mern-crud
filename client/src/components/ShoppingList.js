import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getDatas, deleteData } from '../actions/dataActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getDatas();
    }

    onDeleteClick = id => {
        this.props.deleteData(id)
    }

    render() {
        const { datas } = this.props.data

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {datas.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                        >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getDatas: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, { getDatas, deleteData })(ShoppingList)
