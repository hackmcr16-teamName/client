import React from 'react'
import { Link } from 'react-router'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import BackButton from '../components/BackButton'
import Name from '../components/Name'

export default class Register extends React.Component {
  render() {
    return (
      <section>
        <BackButton to='/' />

        <span className="title">Register - Name</span>

        <section className='register'>
          <Name />
        </section>

        <Link to='/RegisterPhone'>
          <FloatingActionButton className="nextButton">
             <NextButton />
          </FloatingActionButton>
        </Link>
      </section>
    )
  }
}