import React from 'react';

export default class extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

      const listItems = this.props.people.map( (item) =>
        <a href={'https://en.wikipedia.org/wiki/' + item.name}>
          <p className='astronaut-list-item'>{item.name}, {item.craft}</p>
        </a>
      );

      return (
        <div className='astronaut-list'>
          {listItems}
        </div>
      )
    }
}