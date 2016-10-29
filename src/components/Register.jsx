import React from 'react'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from './BackButton'

export default class Register extends React.Component {
  render() {
    return (
      <section className='register'>
      <BackButton to='/' />
        <TextField hintText="Enter Your Name"/>
        <TextField hintText="Enter Your Phone"/>
        <FloatingActionButton>
          <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}