import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mstp = state => {
  console.log(state)
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mstp)(Users)
