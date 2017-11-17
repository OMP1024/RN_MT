/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import MainPage from './src/navigator/MainPage';

export default class App extends PureComponent<{}> {
  render() {
    return (
        <MainPage/>
    );
  }
}

