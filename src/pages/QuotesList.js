
import React, {Component} from 'react';
import $ from 'jquery';
//import { Button } from 'react-bootstrap';

class QuotesList extends Component{
  constructor() {
    super();
    this.state ={
        author: [],
        quotes: []
    }
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    const that = this;
    const xhr = $.get(" https://narutoquoteapi.herokuapp.com/randomquote");
      xhr.done(function (response) {
          console.log("success get data", response);
          that.setState(prevState =>({
            author: [...prevState.author, response.author],
            quotes: [...prevState.quotes, response.quotes]
            }));
        });
} 
  render(){
    return(
      <div>
      {/* <Button variant="primary" onClick={this.onHandleClick} className="search__btn">Quotes</Button> */}
        {/* <h1>{this.state.author}</h1>
        <h3>{this.state.quotes}</h3> */}
        <p align="center"><h1>Em construção</h1></p>
      </div>
    );
  }
}
export default QuotesList;