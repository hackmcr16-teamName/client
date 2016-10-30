import React from 'react'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CameraButton from 'material-ui/svg-icons/image/camera-alt'

import BackButton from '../components/BackButton'
import * as userActions from '../ducks/user'

class RegisterProfilePic extends React.Component {
  constructor(props) {
    super(props)
    this.state = { screenshot: null }
  }

  screenshot = () => {
    const screenshot = this.refs.webcam.getScreenshot()
    this.setState({ screenshot })
  }

  handleClick = () => {
    this.props.actions.setPic(this.state.screenshot)
    this.props.actions.sendUser(this.props.user)
  }

  render() {
    return (
      <section>
        <BackButton to='/RegisterPhone' />

        <span className="title">Register - Profile Picture</span>

        <section className='register'>
          <Webcam audio={false} ref='webcam'/>
        </section>

        <FloatingActionButton onClick={this.handleClick} className="nextButton" >
            <NextButton />
        </FloatingActionButton>

        <FloatingActionButton className="nextButton" onClick={this.screenshot}>
            <CameraButton />
        </FloatingActionButton>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterProfilePic)
