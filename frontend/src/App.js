import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/login' component={LoginScreen} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/signup' component={SignupScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
