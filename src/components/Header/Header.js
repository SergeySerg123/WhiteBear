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
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenedMenu: false,
    };
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
        <Backdrop isOpenedMenu={this.state.isOpenedMenu} />
        <LeftMenu
          navbarToggle={() => this.toggleNavbar()}
          isOpenedMenu={this.state.isOpenedMenu}
        />
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
            <Col sm="4" className="text-right">
              <FontAwesomeIcon className="mr-3" icon={faSearch} size="2x" />
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
