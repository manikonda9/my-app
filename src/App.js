import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img from "./contents/icons/add.svg"

class App extends Component {
  render() {
    return (
      <section>
        <div>Items (200)<span className="sidebar"></span></div>
        <div>2 Selected</div>
        <div>Do Something</div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /></div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /></div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /></div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /><span className="sidebar"></span></div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /></div>
        <div><input type="text" placeholder="Find" /><span className="sidebar"></span></div>
        <div><img src={require("./contents/icons/add.svg")} alt="add" /></div>

        <table className="table responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Name</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manikonda</td>
              <td>Manikonda</td>
              <td>Manikonda</td>
            </tr>
            <tr>
              <td>Manikonda</td>
              <td>Manikonda</td>
              <td>Manikonda</td>
            </tr>
            <tr>
              <td>Manikonda</td>
              <td>Manikonda</td>
              <td>Manikonda</td>
            </tr>
            <tr>
              <td>Manikonda</td>
              <td>Manikonda</td>
              <td>Manikonda</td>
            </tr>
            <tr>
              <td>Manikonda</td>
              <td>Manikonda</td>
              <td>Manikonda</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
