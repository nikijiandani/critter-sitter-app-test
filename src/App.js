import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/users')
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          users: res
        });
      })
    })
  }

  render() {
    const userList = this.state.users.map((user) => {
      return <li key={user.id}>Username: {user.name}</li>
    })
    return (
      <div>
          <h2>List of Users:</h2>
          <ul>{userList}</ul>
      </div>
    );
  }
}

export default App;
