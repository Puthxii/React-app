import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Containers from './containers/containers';
import TextInput from './components/TextInput';
import Button from './components/Button';


class App extends Component {

  state = {
    score: 0,
    grade: ''
  }

  inputChangeHandler = (event) => {
    let value = event.target.value;
    this.setState({
      score: value
    });
  }

  calculateGradeHandler = () => {
    let score = this.state.score;
    let grade = '';
    if(score >= 80){
      grade = 'A'
    }else if(score >= 70){
      grade = 'B'
    }else if(score >= 60){
      grade = 'C'
    }else if(score >= 50){
      grade = 'D'
    }else{
      grade = 'F'

    }

    this.setState({
      grade: grade
    });
  }


  render() {
    return (
      
      <Containers>
       <div className="input-group mb-3">
          <TextInput type="number" value= {this.state.score}  placeholder="input your score" classes="form-control" change={this.inputChangeHandler}/>
        <div className="input-group-append">
          <Button classes="btn btn-outline-secondary" click={this.calculateGradeHandler}>Click</Button>
        </div>
      </div>
      <h1>Grade : {this.state.grade}</h1>
      
      </Containers>
    );
  }
}


export default App;
