import React from 'react'
import { Link } from 'react-router'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from '../components/BackButton'
import Phone from '../components/Phone'

export default class RegisterPhone extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/Register' />

        <span className="title">Register - Phone Number</span>

        <section className='register'>
          <Phone />
        </section>

        <Link to="/RegisterProfilePic">
          <FloatingActionButton className="nextButton" >
              <NextButton />
          </FloatingActionButton>
        </Link>
      </section>
    )
  }
}