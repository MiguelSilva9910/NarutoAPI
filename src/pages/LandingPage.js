/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import React, { Component } from 'react';
//import $ from 'jquery';
import { Button } from 'react-bootstrap';

class LandingPage extends Component{
    constructor() {
        super();
        this.state ={
            image: '',
            author: '',
            quotes: ''
        }
        this.onHandleClick = this.onHandleClick.bind(this);
      }

    //   onHandleClick() {
    //     const that = this;
    //     const xhr = $.get("https://narutoquoteapi.herokuapp.com/randomquote");
    //       xhr.done(function (response) {
    //           console.log("success get data", response);
    //           that.setState({
    //               author: response.author,
    //               image:  response.image,
    //               quotes: response.quote
    //             });
    //         });
    // }

    onHandleClick(){
        fetch("https://narutoquoteapi.herokuapp.com/randomquote")
        .then(results => {
            return results.json();
        }).then(data =>{
            this.setState({
                author: data.author,
                image:  data.image,
                quotes: data.quote
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