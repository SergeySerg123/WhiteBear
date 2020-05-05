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
      items: 8,
      loadMore: false
    };
  }

  componentDidMount() {
    this.props.onLoadProducts(this.state.items);
    window.addEventListener("scroll", this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  onScrollHandler = () => {
    const d = document.documentElement;
    if (
      d.scrollTop + d.clientHeight >=
      this.refs.shopScroll.scrollHeight && !this.state.loadMore
    ) {
      this.loadMoreItems();
    }
  };

  loadMoreItems() {
    if (this.props.isFull) return;

    this.setState({loadMore: !this.state.loadMore, items: this.state.items + 4}, 
      () => {
        this.props.onLoadProducts(this.state.items);
        this.state.loadMore = !this.state.loadMore;
    });
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
                  
                <RefreshDataArrow 
                  isFull={this.props.isFull} 
                  loading={this.props.loading}  />
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
    loading: state.shop.loading,
    isFull: state.shop.isFull,
    hasError: state.shop.hasError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCard: (item) => dispatch(addToCard(item)),
    onLoadProducts: (items) => dispatch(loadProducts(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
