import React, { Component } from 'react';
import List from '../List/List';

class KanbanBoard extends Component {
  render() {
    return (
      <div>
        <List id="todo" title="To Do" cards={this.props.cards.filter((value) => value.status === "to-do")} />
        <List id="in-progress" title="In Progress" cards={this.props.cards.filter((value) => value.status === "in-progress")} />
        <List id="done" title="Done" cards={this.props.cards.filter((value) => value.status === "done")} />
      </div>
    );
  }
}

export default KanbanBoard;