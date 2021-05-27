import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import EditProfileScreen from './screens/EditProfileScreen'
import PostScreen from './screens/PostScreen'
import SearchUsers from './screens/SearchUsers';
import UserProfileScreen from './screens/UserProfileScreen';
import FollowingScreen from './screens/FollowingScreen'
import FollowersScreen from './screens/FollowersScreen'
import NotFound from './screens/NotFound'

function App() {
  return (
    <div className="app">
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/account/login' component={LoginScreen} exact />
            <Route path='/account/signup' component={SignupScreen} exact />
            <Route path='/post/:id' component={PostScreen} />
            <Route path='/search/:keyword' component={SearchUsers} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/:username' component={UserProfileScreen} exact />
            <Route path='/:username/following' component={FollowingScreen} exact />
            <Route path='/:username/followers' component={FollowersScreen} exact />
            <Route path='/account/edit' component={EditProfileScreen} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}

export default App;
