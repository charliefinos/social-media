import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen'
import PostScreen from './screens/PostScreen'
import SearchUsers from './screens/SearchUsers';
import UserProfileScreen from './screens/UserProfileScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/account/login' component={LoginScreen} exact />
            <Route path='/account/signup' component={SignupScreen} exact />
            <Route path='/post/:id' component={PostScreen} />
            <Route path='/search/:keyword' component={SearchUsers} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/:username' component={UserProfileScreen} exact />
            <Route path='/account/edit' component={EditProfileScreen} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
