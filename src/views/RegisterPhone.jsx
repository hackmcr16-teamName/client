import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'

import BackButton from '../components/BackButton'
import Phone from '../components/Phone'
import * as userActions from '../ducks/user'

class RegisterPhone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telephone: ''
    }
  }

  handleChange = e => {
    this.setState({
      telephone: e.target.value
    })
  }

  handleClick = () => {
    this.props.actions.setNumber(this.state.telephone)
  }

  render() {
    return (
      <section>
        <BackButton to='/Register' />

        <span className="title">Register - Phone Number</span>

        <section className='register'>
          <TextField
            hintText="Enter Your Phone Number"
            value={this.state.telephone}
            onChange={this.handleChange}/>
        </section>

        <Link onClick={this.handleClick} to="/RegisterProfilePic">
          <FloatingActionButton className="nextButton" >
              <NextButton />
          </FloatingActionButton>
        </Link>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(RegisterPhone)
