import React from 'react'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from '../components/BackButton'
import Phone from '../components/Phone'

export default class Register extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/' />

        <span className="title">Register - Phone Number</span>

        <section className='register'>
          <Phone />
        </section>

        <FloatingActionButton className="nextButton" >
            <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}