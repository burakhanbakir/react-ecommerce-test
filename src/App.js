import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import Categories from './Categories';
import ProductList from './ProductList';
import Navi from './Navi';
import alertify from "alertifyjs"
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = categoryId => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity++;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart !");
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart !");
  }
  render() {

    return (
      <Container>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row>
          
            <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
         
          </Row>
          <Row >
            <Switch>
              <Route exact path="/" render={props => (
                <ProductList
                  {...props}
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory} />
              )} />
              <Route exact path="/cart" render={props => (
                <CartList
                  {...props}
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}/>
              )} />
              <Route component={NotFound} />

            </Switch>

          </Row>
      </Container>
    );
  }
}


