import React from 'react';
import CardItem from './CardItem/CardItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';
import { deleteFromCard } from '../../store/actions/card.action';
import { connect } from 'react-redux';
import logo from '../../assets/logo/WB-logo.jpg'

class Card extends React.Component {

    deleteProductFromCard(id) {
        const item = this.props.products.find(product => product.id === id);
        if (item != null) {
            this.props.onDeleteProduct(item);
        }
    }

    toggleCardCallback () {
        this.props.toggleCard();
    }

    render () {
        return (
            <div className={this.props.isOpened ? "card-area is-opened-card" : "card-area is-closed-card"}>
                <FontAwesomeIcon 
                    onClick={() => this.toggleCardCallback()} 
                    icon={faTimes} size="2x" 
                    className="cursor-pointer" />
                {/* <div className="card-logo-container">
                    
                </div> */}
                {/* <img className="card-logo" src={logo} /> */}
                <div className="card-items-area">

                    {
                        this.props.products.map((product, i) => (
                            <CardItem
                                deleteProductFromCard={(id) => this.deleteProductFromCard(id)}
                                key={i}
                                id={product.id}
                                title={product.title}
                                type={product.type}
                                color={product.color}
                                density={product.density}
                                price={product.price} />
                        ))
                    }
                    
                </div>
                <div className="card-sum-area">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.card.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (item) => dispatch(deleteFromCard(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);