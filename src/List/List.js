import React, { Component } from 'react';
import Card from '../card/Card';

class List extends Component {
  render() {
    const cards = this.props.cards.map((value, key) => {
      return <Card key={value.id} title={value.title} description={value.description} tasks={value.tasks} />;
    });
    return (
      <div className="list">
        <h2>{this.props.title}</h2>
        {cards}
      </div>
    );
  }
}

export default List;
