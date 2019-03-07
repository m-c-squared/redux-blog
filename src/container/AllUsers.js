import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers } from '../selectors/user';
import Users from '../components/user/Users';
import { fetchUsers } from '../>>>>to actions';

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
    
  
  componentDidMount() { 
    this.props.fetch();
  }

  render() {
    return (
      <Users {...this.props}/>
    );
  }
}
const mapStateToProps = state => ({
  users: getAllUsers(state)  

});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUser());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);
