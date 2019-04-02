import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../store/todos/action";

class Todos extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { getTodos }
)(Todos);
