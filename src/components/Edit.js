import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoEdit from 'material-ui/svg-icons/content/create';

import { connect } from 'react-redux';
import { editTodo } from '../actions';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.todoId,
      open: false,
      title: this.props.todoTitle
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(e) {
   const updateState = {};
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
 }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="SAVE"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        onClick={() => {
          this.props.editTodo(this.state);
          this.setState({ title: '' });
        }}
      />,
    ];

    return (
      <div>
        <FloatingActionButton mini={true} onTouchTap={this.handleOpen}>
          <TodoEdit />
        </FloatingActionButton>
        <Dialog
          title="Edit this Todo"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Input Your Edited Todo Here..."
            floatingLabelText="Edit Todo"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTodo: todo => dispatch(editTodo(todo)),
});

export default connect(null, mapDispatchToProps)(Edit);
