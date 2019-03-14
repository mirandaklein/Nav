import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { config } from './config.js';
import LoginForm from './components/LoginForm.js'
import Router from './router.js';

export default class App extends Component{

  componentWillMount(){
    firebase.initializeApp(config.firebase);
  }
  
  render(){
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
};
