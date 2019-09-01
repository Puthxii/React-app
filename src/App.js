import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Containers from './containers/containers';
import TextInput from './components/TextInput';
import Button from './components/Button';


class App extends Component {
  
  
  render() {
    return (
      
      <Containers>
       <div className="input-group mb-3">
          <TextInput type="number" value="" placeholder="input your score" classes="form-control"/>
        <div className="input-group-append">
          <Button classes="btn btn-outline-secondary">Click</Button>
        </div>
      </div>
      
      </Containers>
    );
  }
}


export default App;
