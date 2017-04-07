import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  render () {
    // [{ label: "a" }, { label: "b" }, ...]
    // into:
    // [<Item label="a" />, <Item label="b" />]
    // const items = [
    //   <Item label={this.props.items[0].label} key={0} />,
    //   <Item label={this.props.items[1].label} key={1} />,
    // ]

    const items = this.props.items.map((item, i) => {
      return <Item
      label={item.label}
      done={item.done}
      toggleComplete={this.props.toggleComplete}
      key={i} />
    })

    return <ul className="list">
      {items}
    </ul>
  }
}
export default List
