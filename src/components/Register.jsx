import React from 'react'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from './BackButton'

export default class Register extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/' />

        <span className="title">Register</span>

        <section className='register'>
          <TextField hintText="Enter Your Name"/>
          <TextField hintText="Enter Your Phone"/>
        </section>

        <FloatingActionButton className="nextButton">
            <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}