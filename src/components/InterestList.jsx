import React from 'react'
import { Link } from 'react-router'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import UserButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'

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
      <section>
        <section className="interests">
          {interests.map(interest => (
            <Interest key={interest.id} name={interest.name} />
            ))}
        </section>

        <Link to='/Register'>
          <FloatingActionButton className="nextButton">
            <NextButton />
          </FloatingActionButton>
        </Link>

        <Link to='/Login' >
          <UserButton label="Been here before?" primary className="nextButton"
           style={{marginTop: '11px' }}/>
        </Link>
      </section>
    )
  }
}
