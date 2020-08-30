import React, { Component } from "react";
import {ListGroup, ListGroupItem, Container } from "reactstrap";
export default class Categories extends Component {
  
        state = {
            categories: []
        };
        componentDidMount(){
            this.getCategories();
        }
        getCategories = ()=>{
            fetch("http://localhost:3000/categories")
            .then(response=>response.json())
            .then(data=>this.setState({categories:data}));;
    }
    render() {
        return (
            <Container>
                <h3>Categories</h3>
                <ListGroup horizontal>
                    {this.state.categories.map(category => (
                        <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                            onClick={() => this.props.changeCategory(category)}
                            key={category.categoryId}>
                                {category.categoryName}</ListGroupItem>
                    ))}


                </ListGroup>
                <h3>{this.props.currentCaregory}</h3>
            </Container>
        );
    }
}
