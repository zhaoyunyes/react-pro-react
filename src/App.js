import React, {Component} from 'react';
import KanBanBoard from './kanbanboard/KanbanBoard';
import './App.css';

let cardsList = [{
  id: 1,
  title: "Read the Book",
  description: "I should read the whole book",
  status: "in-progress",
  tasks: []
}, {
  id: 2,
  title: "Write some code",
  description: "Code along with the samples in the book",
  status: "to-do",
  tasks: [{
    id: 1,
    name: "ContactList Example",
    done: true
  }, {
    id: 2,
    name: "Kanban Example",
    done: false
  }, {
    id: 3,
    name: "My own experiments",
    done: false
  }]
}];

class App extends Component {
  render() {
    return (
      <KanBanBoard cards={cardsList}/>
    );
  }
}

export default App;