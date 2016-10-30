import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'

import BackButton from '../components/BackButton'
import * as userActions from '../ducks/user'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleClick = () => {
    this.props.actions.setName(this.state.name)
  }

  render() {
    return (
      <section>
        <BackButton to='/' />

        <span className="title">Register - Name</span>

        <section className='register'>
          <TextField
            hintText="Enter Your Name"
            value={this.state.name}
            onChange={this.handleChange}/>
        </section>

        <Link onClick={this.handleClick} to='/RegisterPhone'>
          <FloatingActionButton className="nextButton">
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

export default connect(null, mapDispatchToProps)(Register)
