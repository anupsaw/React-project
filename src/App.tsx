import React from 'react';

import { ShSoochi } from './sh-soochi/sh-soochi';
import './App.css';



export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ShSoochi name="anup"></ShSoochi>
      </div>
    );
  }
}
