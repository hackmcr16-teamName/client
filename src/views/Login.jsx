import React from 'react'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from '../components/BackButton'

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/' />

        <span className="title">Login</span>

        <section className="phoneField">
        <TextField hintText="Enter Your Phone Number!"/>
        </section>

        <FloatingActionButton className="nextButton">
          <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}