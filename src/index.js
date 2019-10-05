import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import {createLogger} from 'redux-logger';
import 'tachyons';
import {searchRobots, requestRobots} from './containers/reducers';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));

// ReactDOM.render(<Hello greeting={'Hello Ninja'}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
