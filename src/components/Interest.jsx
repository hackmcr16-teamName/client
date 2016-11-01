import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Paper from 'material-ui/Paper'

import * as interestActions from '../ducks/interest'

const style = {
  borderRadius: 20,
  width: 250,
  height: 100,
  marginBottom: '1.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5em',
}

class Interest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zDepth: 0
    }
  }

  handleClick = () => {
    this.setState({zDepth: this.state.zDepth === 1 ? 0 : 1})
    this.props.actions.toggleInterest(this.props.id)
  }

  render() {
    return (
      <Paper
        style={style}
        className={this.props.selected && 'selected'}
        zDepth={this.state.zDepth}
        onClick={this.handleClick}>
        <span>{this.props.name}</span>
      </Paper>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(interestActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Interest)
