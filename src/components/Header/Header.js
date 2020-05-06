import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../UI/Backdrop/Backdrop";
import LeftMenu from "../LeftMenu/LeftMenu";
import CardCounter from '../Card/CardCounter/CardCounter';
import "./Header.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";
import LinearProgress from '@material-ui/core/LinearProgress';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenedMenu: false,
      isOpenedCard: false
    };
  }

  toggleCard() {
    this.setState({ isOpenedCard: !this.state.isOpenedCard });
  }

  toggleNavbar() {
    this.setState({ isOpenedMenu: !this.state.isOpenedMenu });
  }

  isWhiteHeader() {
    return this.props.isWhite
      ? "header-main-style text-white"
      : "header-main-style";
  }

  render() {
    return (
      <header className={this.isWhiteHeader()}>
        <Backdrop 
          isOpenedMenu={this.state.isOpenedMenu} 
          isOpenedCard={this.state.isOpenedCard} />
        <LeftMenu
          navbarToggle={() => this.toggleNavbar()}
          isOpenedMenu={this.state.isOpenedMenu}
        />
        <Card isOpened={this.state.isOpenedCard}  toggleCard={() => this.toggleCard()} />
        <Container>
          <Row className="pt-3">
            <Col sm="4" className="d-flex align-items-center">
              <FontAwesomeIcon
                onClick={() => this.toggleNavbar()}
                className="navbar-btn"
                icon={faBars}
                size="2x"
              />
              <div className="d-inline-block ml-3">MENU</div>
            </Col>
            <Col sm="4" className="d-flex align-items-center text-center">
              <div>White Bear - твій улюблений смак пива!</div>
            </Col>
            <Col sm="4" className="text-right position-relative">
              <FontAwesomeIcon className="mr-3" icon={faSearch} size="2x" />
              <FontAwesomeIcon className="cursor-pointer" onClick={() => this.toggleCard()} icon={faShoppingCart} size="2x" />
              <CardCounter itemsInCard={this.props.itemsInCard} />
            </Col>
          </Row>
        </Container>
        {this.props.loading && <LinearProgress className="process" />}      
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCard: state.card.products.length,
    loading: state.shop.loading
  }
}

export default connect(mapStateToProps, null)(Header);
