import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
export default class Categories extends Component {
  
        state = {
            categories: [
                { categoryId: 1, categoryName: "Home", categoryDetail: "Biography web page with react" },
                { categoryId: 2, categoryName: "About me", categoryDetail: "I am Burakhan."},
                { categoryId: 3, categoryName: "Projects", categoryDetail: "Projects..."},
                { categoryId: 4, categoryName: "Contact", categoryDetail: "E-Mail: burakhanbakir@gmail.com"}

            ]
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
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem active = {category.categoryName===this.props.currentCaregory?true:false}
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
