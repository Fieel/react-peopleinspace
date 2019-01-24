import React from 'react';
import Counter from './counter';
import List from './list';

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            numerOfPeopleInSpace: null,
            listOfPeopleInSpace: []
        }
    }

    // React hook, fetching the API here
    componentDidMount() {

        this.setState({
            isLoading: true
          });

        fetch("http://api.open-notify.org/astros.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoading: false,
                numerOfPeopleInSpace: result.number,
                listOfPeopleInSpace: result.people
              });
            },
            (error) => {
              this.setState({
                isLoading: false,
                error: true
              });
            }
          )
      }

    render(){
        return (
            <div>
                <Counter number={this.state.numerOfPeopleInSpace} />
                <List people={this.state.listOfPeopleInSpace} />
            </div>
        )
    }
}