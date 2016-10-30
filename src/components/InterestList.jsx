import React from 'react'

import Interest from './Interest'

export default class InterestList extends React.Component {
  render() {
    return (
      <section>
        <section className="interests">
          {this.props.interests.map(interest => (
            <Interest
              key={interest.interestID}
              selected={interest.selected}
              id={interest.interestID}
              name={interest.name} />
            ))}
        </section>
      </section>
    )
  }
}
