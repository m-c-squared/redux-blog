import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from '../components/comments/Comments';
import { fetchComments } from '../actions/comments';
import { getAllComments } from '../selectors/comments';

class AllComments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Comments {...this.props}/>
    );
  }
}
const mapStateToProps = (state) => ({
  comments: getAllComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchComments());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComments);

