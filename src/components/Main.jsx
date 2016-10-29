import React from 'react'

import InterestList from './InterestList'

export default class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <h1 className="headerText">Come and Connect</h1>
        <InterestList />
      </section>
    )
  }
}
