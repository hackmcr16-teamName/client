import React from 'react'
import axios from 'axios'
import Profile from './Profile'


const users = [
  {
    id: 1,
    name: 'Tony',
    telephone: '447718233598',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Fishing', 'Reading'],
  },
  {
    id: 2,
    name: 'Ben',
    telephone: '447531883826',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Football', 'Tennis'],
  },
  {
    id: 3,
    name: 'Huss',
    telephone: '447947855040',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Gardening', 'Tennis'],
  },
  {
    id: 4,
    name: 'Arslaan',
    telephone: '447463503877',
    pic: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    interests: ['Gardening', 'Football'],
  }
]

export default class ProfileList extends React.Component {
  render() {
    return (
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em'}}>
        <h1 className="headerText" style={{fontSize: '2em'}}>Who do you want to connect with?</h1>
        {users.map(user => (<Profile key={user.id} {...user} />))}
      </section>
    )
  }
}
