import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Error from './components/users/Error';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    error: false,
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      let res = await axios.get(
        'https://yalantis-react-school.herokuapp.com/api/task0/users'
      );

      if (res.status === 200) {
        this.setState({ users: res.data });
        this.setState({ loading: false });
      }

      return res.data;
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>{Content(this.state)}</div>
      </div>
    );
  }
}

function Content(state) {
  if (state.error) {
    return <Error />;
  }
  return <Users loading={state.loading} users={state.users} />;
}

export default App;
