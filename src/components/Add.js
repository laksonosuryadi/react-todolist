import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoAdd from 'material-ui/svg-icons/content/add';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: ''
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
          this.props.addTodo(this.state);
          this.setState({ title: '' });
        }}
      />,
    ];

    return (
      <div>
        <FloatingActionButton onTouchTap={this.handleOpen}>
          <TodoAdd />
        </FloatingActionButton>
        <Dialog
          title="Add New Todo"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Input Your New Todo Here..."
            floatingLabelText="New Todo"
            name="title"
            onChange={this.handleChange.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
});

export default connect(null, mapDispatchToProps)(Add);
