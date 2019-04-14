/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { createStore } from 'redux';
class LandingPage extends Component{
     state = {
        image: '',
        author: '',
        quotes: ''
    }


    onHandleClick = () => {
        fetch("https://narutoquoteapi.herokuapp.com/randomquote")
        .then(results => {
            return results.json();
        }).then(({author, image, quote}) => {
            this.setState({
                author: author,
                image:  image,
                quotes: quote
            });
        })
    }

    render(){
        return(
            <div className="search">
                <Button variant="primary" onClick={this.onHandleClick} className="search__btn">Ninja?</Button>
                <h1 className="search__name">{this.state.author}</h1>
                <h3 className="search__quotes">{this.state.quotes}</h3>
                <img src={this.state.image} className="search__image" />
            </div>
        );
    }
}

  export default LandingPage;
