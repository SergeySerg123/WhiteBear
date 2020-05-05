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
    this.state = {
      items: 12,
      loading: false
    };
  }

  componentDidMount() {
    this.props.onLoadProducts(this.state.items);
    window.addEventListener("scroll", this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollHandler);
  }

  onScrollHandler = () => {
    const d = document.documentElement;
    if (
      d.scrollTop + d.clientHeight >=
      this.refs.shopScroll.scrollHeight
    ) {
      this.loadMoreItems();
    }
  };

  loadMoreItems() {
    console.log('load more');
  }

  addToCard(id) {
    const item = this.props.products.find((item) => item.id === id);
    if (item != null) {
      this.props.onAddToCard(item);
    }
  }

  render() {
    return (
      <div className="shop-section" ref="shopScroll" >
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
                {this.props.products.map((product, i) => (
                  <Col xs="3">
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
                ))}
                  
                <RefreshDataArrow loading={this.state.loading}  />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
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
    onLoadProducts: (items) => dispatch(loadProducts(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
