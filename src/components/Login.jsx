import React from 'react'
import IconButton from 'material-ui/IconButton'
import BackButton from 'material-ui/svg-icons/navigation/arrow-back'
import NextButton from 'material-ui/svg-icons/image/navigate-next'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <IconButton >
          <BackButton />
        </IconButton>
        <br/>
        <br/>
        <br/>
        <TextField className="phoneField" hintText="Enter Your Phone Number!"/>
        <br/>
        <br/>
        <FloatingActionButton >
          <NextButton />
        </FloatingActionButton>
      </section>
    )
  }
}