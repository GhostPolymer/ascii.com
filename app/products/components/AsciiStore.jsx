import React, { Component } from 'react';
import ndjsonStream from 'can-ndjson-stream';
import ProductGrid from '../../products/components/ProductGrid';

class AsciiStore extends Component {
  constructor (props) {
    super(props);
    this.state = { products: [] };
  }
  
  componentDidMount() {
    
    this.fetchProducts();
  }
  
  fetchProducts(){
    
    fetch('${API_HOST}/api/products')
     .then(data => ndjsonStream(data.body))
     .then((stream) => {
       const streamReader = stream.getReader();
       const readHandler = (result) => {
         if (result.done) return; 
         
         this.setState({
           products: this.state.products.concat(result.value),
         });
         
         streamReader.read().then(readHandler);
       };
       streamReader.read().then(readHandler);
     });
  }
  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        <ProductGrid products={this.state.products} />
      </div>
    );
  }
}

export default AsciiStore;