import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDqzygIkDNbplK78eIJWsx2-B7jtLamdqk',
      authDomain: 'manager-ab85b.firebaseapp.com',
      databaseURL: 'https://manager-ab85b.firebaseio.com',
      storageBucket: 'manager-ab85b.appspot.com',
      messagingSenderId: '75845354912'
    };

    firebase.initializeApp(config);
  }

  render () {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
