import React from 'react'

import InterestList from './InterestList'

export default class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <h1 className="headerText">What do you want to talk about?</h1>
        <InterestList />
      </section>
    )
  }
}
