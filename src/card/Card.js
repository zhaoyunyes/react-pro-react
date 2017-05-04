import React, { Component } from 'react';
import CheckList from '../checklist/CheckList';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="card-title">{this.props.title}</h3>
        <div className="card-details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default Card;