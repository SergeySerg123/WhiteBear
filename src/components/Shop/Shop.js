import React from "react";
import "./Shop.scss";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "./ProductItem/ProductItem";
import { connect } from "react-redux";
import { addToCard } from "../../store/actions/card.action";
import { loadProducts } from "../../services/Shop";
import  RefreshDataArrow  from "./RefreshDataArrow/RefreshDataArrow";

class Shop extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.onLoadProducts();
    window.addEventListener('scroll', this.onScrollToBottom);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollToBottom);
  } 

  addToCard(id) {
    const item = this.props.products.find((item) => item.id === id);
    if (item != null) {
      this.props.onAddToCard(item);
    }
  }

  onScrollToBottom = () => {
    console.log('Scroll to bottom');
  }

  render() {
    return (
      <section className="shop-section">
        <Container fluid="sm">
          <Row>
            <Col xs="2" className="right-border pl-3">
              <div className="catalog-title">
                <span>Наші пропозиції</span>
              </div>
              <div className="category-title">
                <span className="item-title">Всі пропозиції</span>
              </div>
              <div className="category-title">
                <span className="item-title active">Пиво</span>
                <ul>
                  <li className="active">Біле</li>
                  <li>Світле</li>
                  <li>Темне</li>
                </ul>
              </div>
              <div className="category-title">
                <span className="item-title">Слабоалкогольні напої</span>
                <ul>
                  <li>Сідр</li>
                  <li>Винний ель</li>
                  <li>Бірмікс</li>
                </ul>
              </div>
            </Col>
            <Col xs="10">
              <Row>
                {
                  this.props.products.slice(0,4).map((product, i) => (
                    <Col  xs="3">
                      <ProductItem
                        key={i}                      
                        productId={product.id}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        addToCard={(id) => this.addToCard(id)}
                      />
                    </Col>
                  ))
                }
                <RefreshDataArrow />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCard: (item) => dispatch(addToCard(item)),
    onLoadProducts: () => dispatch(loadProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
