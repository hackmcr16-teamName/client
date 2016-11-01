import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Paper from 'material-ui/Paper'

const style = {
  width: 800,
  height: 200,
  marginBottom: 30,
  padding: '2em 5em',
  display: 'flex'
}

const picStyle = {
  borderRadius: '50%',
  height: 150,
  width: 150,
  backgroundColor: 'rgba(0, 0, 0, .75)',
}

class Profile extends React.Component {
  handleClick = () => {
    let key = '503b9618723e4d48b05c60525cd650fa787e9224'
    axios.get('https://api.clockworksms.com/http/send.aspx?key=' + key, {
      params: {
        to: this.props.telephone,
        content: `${this.props.user.name} wants to connect with you! Text or call them on ${this.props.user.telephone}`
      }
    })
    // axios.get('https://api.clockworksms.com/http/send.aspx', {
    //   params: {
    //     key: '503b9618723e4d48b05c60525cd650fa787e9224',
    //     to: this.props.telephone,
    //     content: `${this.props.name} wants to connect with you! Text or call them on 0000`
    //   }
    // })
  }

  render() {
    return (
      <Paper style={style} onClick={this.handleClick}>
        <section style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
          <section style={{flexGrow: 1, fontSize: '3em', fontWeight: 700}}>{this.props.name}</section>
        <section style={{width: '100%', display: 'flex'}}>
          {this.props.interests.map(interest => (<span key={interest.name} style={{marginLeft: 10}}>{interest}</span>))}
        </section>
        </section>
          <section style={{...picStyle, top: 10, right: 10}} />
      </Paper>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(Profile)
