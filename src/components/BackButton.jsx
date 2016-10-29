import React from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { Link } from 'react-router'

export default class BackButton extends React.Component {
  render() {
    return (
     <Link to={this.props.to}>
        <IconButton>
            <ArrowBack />
        </IconButton>
      </Link>
    )
  }
}