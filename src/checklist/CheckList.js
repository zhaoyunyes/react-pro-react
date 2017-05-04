import React, { Component } from 'react';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((value) => (
      <li className="checklist-task" key={value.id}>
        <input type="checkbox" defaultChecked={value.done} />
        {value.name}
        <a href="#" className="checklist-task-remove" />
      </li>
    ));
    return (
      <div>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default CheckList;