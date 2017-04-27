import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <div>
    <AppBar
      title="React To-Do-List"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{backgroundColor: '#D84315'}}
    />
  </div>
);

export default Header;
