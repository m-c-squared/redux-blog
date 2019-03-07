import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import UserDetail from '../components/user/UserDetail';
import { getUserById } from '../selectors/user';
import { fetchUser } from '../actions/users';
import PropTypes from 'prop-types';

class UserContainer extends PureComponent {
static propTypes = {
  userDetail: PropTypes.object,
  fetch: PropTypes.func
}

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return(
      <UserDetail {...this.props} />
    )
  }
}


const mapStateToProps = (state) => ({
  userDetail: getUserById(state)
});

const mapDispatchToProps = (dispatch, id) => ({
  fetch() {
    console.log('id', id);
    // dispatch(fetchUser(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
