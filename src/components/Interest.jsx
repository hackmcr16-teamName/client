import React from 'react'

import Paper from 'material-ui/Paper'

const style = {
  borderRadius: 20,
  width: 250,
  height: 100,
  marginBottom: '1.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5em',
  color: '#00729a',
}

export default class Interest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zDepth: 0
    }
  }

  handleClick = () => {
    this.setState({zDepth: this.state.zDepth === 1 ? 0 : 1})
  }

  render() {
    return (
      <Paper
        style={style}
        className={this.state.zDepth === 1 && 'selected'}
        zDepth={this.state.zDepth}
        onClick={this.handleClick}>
        <span>{this.props.name}</span>
      </Paper>
    )
  }
}
