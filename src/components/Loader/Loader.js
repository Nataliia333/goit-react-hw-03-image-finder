import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.Loader_container}>
        <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
