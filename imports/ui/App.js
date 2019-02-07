import React, { Component } from "react";
import Layout from "./pages/Layout";
import MyFancyComponent from './components/Map/Maps'
// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <MyFancyComponent />
        <Layout />

        <ul />
      </div>
    );
  }
}
