import React, {Component} from 'react';
import './styles/App.css';
import Cart from './components/shopify/Cart';

class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }

  render(){
  return (
    <div className="App">
      
    </div>
  );
}
}
export default App;
