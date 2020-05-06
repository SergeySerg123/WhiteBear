import React, { Component } from "react";
import { Route } from "react-router";
import { store } from "./store/store";
import "./custom.scss";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import Main from "./components/Main/Main";
import Shop from './components/Shop/Shop';
import { withHeader } from "./components/hoc/withHeader";
import 'typeface-roboto';

export default class App extends Component {
  static displayName = App.name;

  withHeader(component, isWhite) {
    return withHeader(component, isWhite);
  }

  render() {
    return (
      <Provider store={store}>
          <Route exact path="/" component={this.withHeader(Main, true)} />
          <Route path="/shop" component={this.withHeader(Shop, true)} />     
      </Provider>
    );
  }
}
