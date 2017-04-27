import React from 'react';

import TodoList from './TodoList';
import Add from './Add';

const styles = {
  rapih: {
    marginLeft: 30,
    marginRight: 30
  }
}

const Content = () => (
  <div style={styles.rapih}>
    <h2>Recent Todos</h2>
    <TodoList />
    <Add />
  </div>
);

export default Content;
