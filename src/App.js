import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import ProductList from './components/Product/productList';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      totalCount: 0
    }
  }

  productCount = (totalCount) => {
    console.log("totalCount", totalCount);
    this.setState({
      totalCount
    })
  }
  render() {
    return (
      <div className="App border border-danger">
        <Navbar totalCount={this.state.totalCount}></Navbar>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default App;
