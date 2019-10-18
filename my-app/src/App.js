import React, {Component} from 'react';
import 'bootstrap-4-react/dist/bootstrap-4-react.js';
import Userform from './component/userForm'
import Usertable from './component/userTable'
import './App';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <Userform />
          <Usertable/>
        </div>
        
      </div>
    );
  }
  
}


