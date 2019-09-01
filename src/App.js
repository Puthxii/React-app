import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Containers from './containers/containers';

class App extends Component {
  
  
  render() {
    return (
      <Containers>
       <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>

       
      </Containers>
    );
  }
}


export default App;
