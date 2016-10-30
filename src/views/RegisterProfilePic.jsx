import React from 'react'
import Webcam from 'react-webcam'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CameraButton from 'material-ui/svg-icons/image/camera-alt'

import BackButton from '../components/BackButton'

export default class RegisterProfilePic extends React.Component {
  constructor(props) {
    super(props)
    this.state = { screenshot: null }
  }

  screenshot = () => {
    const screenshot = this.refs.webcam.getScreenshot()
    this.setState({screenshot: screenshot})
    console.log(screenshot.length)
  }

  render() {
    return (
      <section>
        <BackButton to='/RegisterPhone' />

        <span className="title">Register - Profile Picture</span>

        <section className='register'>
          <Webcam audio={false} ref='webcam'/>
        </section>

        <FloatingActionButton className="nextButton" >
            <NextButton />
        </FloatingActionButton>

        <FloatingActionButton className="nextButton" onClick={this.screenshot}>
            <CameraButton />
        </FloatingActionButton>
      </section>
    )
  }
}