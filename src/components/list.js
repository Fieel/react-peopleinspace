import React from 'react';
import '../App.css';

export default class extends React.Component {
  render() {
    const listItems = this.props.people.map((item) =>
      <a href={'https://en.wikipedia.org/wiki/' + item.name}>
        <p className='astronaut-list-item' key={item.name}>{item.name}, {item.craft}</p>
      </a>
    );
    return (
      <div className='astronaut-list'>
        {listItems}
      </div>
    )
  }
}