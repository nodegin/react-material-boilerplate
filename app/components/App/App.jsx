import $ from './App.css';
import React from 'react';
import { Header } from '../../components';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <RaisedButton label="Default" />
        <h1>
          hello <span className={$.test}>world</span>
        </h1>
      </div>
    );
  }
}
