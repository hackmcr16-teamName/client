import React from 'react'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from './BackButton'

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/'/>
        <TextField className="phoneField" hintText="Enter Your Phone Number!"/>
        <FloatingActionButton >
          <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}