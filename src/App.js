import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Categories from './Categories';
import ProductList from './ProductList';
import Navi from './Navi';


export default class App extends Component {
  state = { currentCategory: "", products: [],cart:[] }
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
  addToCart=(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id===product.id);
    if(addedItem)
    {
      addedItem.quantity++;
    }
    else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
  }

  removeFromCart=(product)=>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
  }
  render() {

    return (
      <Container>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row>
          <Col xs="3">
            <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
          </Col>
          <Col xs="9"><ProductList
            products={this.state.products}
            addToCart={this.addToCart}
            currentCategory={this.state.currentCategory} />
          </Col></Row>
      </Container>
    );
  }
}


