import React from 'react'

import Interest from './Interest'

const interests = [
  {
    id: 1,
    name: 'Gardening'
  },
  {
    id: 2,
    name: 'Books'
  },
  {
    id: 3,
    name: 'Dancing'
  },
  {
    id: 4,
    name: 'Football'
  },
  {
    id: 5,
    name: 'Music'
  },
  {
    id: 6,
    name: 'Fishing'
  }
]

export default class InterestList extends React.Component {
  render() {
    return (
      <section className="interests">
        {interests.map(interest => (<Interest key={interest.id} name={interest.name} />))}
      </section>
    )
  }
}
