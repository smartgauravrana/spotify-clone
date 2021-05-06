/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';

const store = createStore();

const AppComponent = () => {
    return (<Provider store={store}>
        <App />
    </Provider>);
}

AppRegistry.registerComponent(appName, () => AppComponent);
