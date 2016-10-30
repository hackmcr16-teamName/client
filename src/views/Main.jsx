import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InterestList from '../components/InterestList'
import * as interestActions from '../ducks/interest'

class Main extends React.Component {
  componentWillMount = () => {
    !this.props.interests && this.props.actions.fetchInterests()
  }

  render() {
    return (
      <section className="main">
        <h1 className="headerText">What do you want to talk about?</h1>
        {this.props.interests && <InterestList interests={this.props.interests} />}
      </section>
    )
  }
}

const mapStateToProps = store => {
  return {
    interests: store.interests.interests
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(interestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
