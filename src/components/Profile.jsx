import React from 'react'

export default class Profile extends React.Component {
  render() {
    return (
      <section className="profile">
        <span className="name">{this.props.name}</span>
        <img href={this.props.pic} />
        {this.props.interests.map(interest => (<span>{interest}</span>))}
      </section>
    )
  }
}
