import React from 'react'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <section>
        <section className="content">
          {this.props.children}
        </section>
      </section>
    )
  }
}
