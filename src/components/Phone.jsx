import React from 'react'

import TextField from 'material-ui/TextField'

export default class Phone extends React.Component {
  render() {
    return (
      <section>
        <TextField hintText="Enter Your Phone Number"/>
      </section>
    )
  }
}