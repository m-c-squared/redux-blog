import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, getUserById } from '../selectors/user';
import Users from '../components/user/Users';
import { fetchUsers } from '../actions/users';



class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    // userDetail: PropTypes.object.isRequired,
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
const mapStateToProps = (state) => ({
  users: getAllUsers(state),
  // userDetail: getUserById(state, props.match.params.id)

});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  }
  

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);
