import React from 'react';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';

import { setSearchKeyword } from '../actions';

const styles = {
  rapih: {
    marginLeft: 30,
    marginRight: 30
  }
}

const Search = props => (
  <div>
    <TextField
      style={styles.rapih}
      hintText="Search your Todo here..."
      floatingLabelText="Search"
      type="text"
      value={props.searchKeyword}
      onChange={e => props.setSearchKeyword(e.target.value)}
    />
  </div>
);

const mapStateToProps = state => ({
  searchKeyword: state.searchKeyword,
});

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: searchKeyword => dispatch(setSearchKeyword(searchKeyword)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
