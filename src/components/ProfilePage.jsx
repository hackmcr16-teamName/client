import React from 'react'

import ProfileList from './ProfileList'

export default class ProfilePage extends React.Component {
  render() {
    return (
      <section className="profile-page">
        <ProfileList />
      </section>
    )
  }
}
