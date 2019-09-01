import React, {Component} from 'react';
import Containers from './containers/containers';
import  MenuBar  from './Layout/MenuBar';
import  Header  from './Layout/Header';
import  Content  from './Layout/Content';
import  Footer  from './Layout/Footer';


class App extends Component {

  render() {
    return (
      <div>
        <MenuBar></MenuBar>
        <Header></Header>

        <Containers>
          <Content></Content>
          <Footer></Footer>
         </Containers>

      </div>
     
      );
  }
}


export default App;
