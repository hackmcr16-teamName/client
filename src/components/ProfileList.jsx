import React from 'react'

import Profile from './Profile'

const users = [
  {
    id: 1,
    name: 'Tony',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Fishing', 'Reading'],
  },
  {
    id: 2,
    name: 'Ben',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Football', 'Tennis'],
  }
]

export default class ProfileList extends React.Component {
  render() {
    return (
      <section>
        {users.map(user => (<Profile key={user.id} {...user} />))}
      </section>
    )
  }
}
