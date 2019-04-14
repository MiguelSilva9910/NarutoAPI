import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class QuotesList extends Component{
  state = {
        list: [
          {
            name: '',
            quote: '' 
          }
        ]
    }


    onHandleClick = () => {
      fetch("https://narutoquoteapi.herokuapp.com/quotelist")
      .then(receive => {
          return console.log(receive.json());
      }).then(() => {
          this.setState({
              list: this.receive
          });
      })
  }

  render(){
    return(
      <div>
      <Button variant="primary" onClick={this.onHandleClick}className="search__btn">Quotes</Button>
      </div>
    );
  }
}
export default QuotesList;