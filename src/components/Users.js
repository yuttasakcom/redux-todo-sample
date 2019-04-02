import React from "react";
import { connect } from "react-redux";
import { setUsers } from "../store/users/action";

class Users extends React.Component {
  componentDidMount() {
    this.props.setUsers();
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { setUsers }
)(Users);
