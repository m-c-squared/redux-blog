import React, { PureComponent } from 'react';
import store from '../store';
import { getAllUsers } from './selectors/not-hookedup'
import Users from '../components/user/Users';

export default class AllUsers extends PureComponent {
  state= {
    user: [],
    unsubscribe: null
  }

  updateState = () => {
    const currentReduxState = store.getState();
    const users = getAllUsers(currentReduxState)
    this.setState({ users});
  }
  
  componentDidMount() { 
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }
  render() {
    return <Users title="All Users" users={this.state.users} />
  }
}