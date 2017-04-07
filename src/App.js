import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    items: [
      // { label: 'Learn JavaScript' },
      // { label: 'Learn React' }
    ]
  }

  addItem (newItem) {
    this.setState({
      items: [...this.state.items, { label: newItem, done: false }]
    })
  }

  toggleComplete = (index) => {
    const newItems = this.state.items.slice()
    newItems[index].done = !newItems[index].done
    this.setState({ items: newItems })
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.todoText
    this.addItem(input.value)
    input.value = ''
  }

  render() {
    return (
    <div className="App">
    <div className="box">
      <h1>To-Do List</h1>
      <List items={this.state.items}
      toggleComplete={this.toggleComplete}/>
      <form onSubmit={this._submit}>
      <input className="textbox" ref='todoText' type="text" />
          <button className="button">Click</button>
      </form>
    </div>
      <p className="footer">Copyright &copy; Carolina de la Fuente. Made with &hearts; at The Iron Yard.</p>
    </div>
    );
  }
}

export default App;
