import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoDone from 'material-ui/svg-icons/action/done';
import TodoUnDone from 'material-ui/svg-icons/content/clear';
import TodoDelete from 'material-ui/svg-icons/action/delete';

import Edit from '../Edit';
import { filterTodo } from '../../selectors'
import { connect } from 'react-redux';

import { completeTodo, uncompleteTodo, deleteTodo } from '../../actions';

const styles = {
  doneBtn: {
    marginLeft: 10,
    marginTop: 5,
  },
  rapih: {
    marginLeft: 55
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      status: ''
    };
  }

  handleChange(id, status) {
   console.log("CLICKED");
   if(status === false) {
     this.props.completeTodo(id)
   } else {
     this.props.uncompleteTodo(id)
   }
  }

  confirmDelete(id){
    var confirmation = confirm('Are you sure want to delete this Todo?')
    if(confirmation === true){
      this.props.deleteTodo(id)
    }
  }

  render() {
    return (
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>TODO</TableHeaderColumn>
            <TableHeaderColumn>STATUS</TableHeaderColumn>
            <TableHeaderColumn>SET_STATUS</TableHeaderColumn>
            <TableHeaderColumn>DELETE</TableHeaderColumn>
            <TableHeaderColumn>EDIT</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        { this.props.todos.map(todo =>
              <TableRow key={todo.id}>
                <TableRowColumn>{todo.id}</TableRowColumn>
                <TableRowColumn>{todo.title}</TableRowColumn>
                {todo.status === false ? <TableRowColumn style={{color:'red'}}>Uncomplete</TableRowColumn> : <TableRowColumn style={{color:'green'}}>Complete</TableRowColumn>}
                <TableRowColumn>
                  <FloatingActionButton
                    mini={true}
                    style={styles.doneBtn}
                    backgroundColor='green'
                    onClick={() => this.handleChange(todo.id, todo.status)}
                  >
                    { todo.status === false ? <TodoDone /> : <TodoUnDone />}
                  </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn>
                <FloatingActionButton
                  mini={true}
                  style={styles.doneBtn}
                  backgroundColor='red'
                  onClick={() => this.confirmDelete(todo.id)}
                >
                  <TodoDelete />
                </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn>
                  <Edit todoId={todo.id} todoTitle={todo.title}/>
                </TableRowColumn>
              </TableRow>
            )}
            { this.props.todos.length == 0 && <center><h1 style={{color:'red'}}><marquee width="30%" behavior="alternate">Nothing To-Do Here!</marquee></h1></center> }
            </TableBody>
          </Table>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
    todos: filterTodo(state.todos, state.searchKeyword),
    searchKeyword: state.searchKeyword,
});

const mapDispatchToProps = dispatch => ({
  completeTodo: todoId => dispatch(completeTodo(todoId)),
  uncompleteTodo: todoId => dispatch(uncompleteTodo(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
