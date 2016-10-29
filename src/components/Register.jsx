import React from 'react'
import IconButton from 'material-ui/IconButton'
import BackButton from 'material-ui/svg-icons/navigation/arrow-back'
import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const iconButton = {
  paddingBottom: '50px',
  float: 'left',
  clear: 'both',
}



export default class Register extends React.Component {
  render() {
    return (
      <section className='register'>
        <IconButton>
          <BackButton />
        </IconButton>
        <TextField hintText="Enter Your Name"/>
        <TextField hintText="Enter Your Phone"/>
        <FloatingActionButton>
          <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}