import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import NextButton from 'material-ui/svg-icons/image/navigate-next'
import UserButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import InterestList from '../components/InterestList'
import * as interestActions from '../ducks/interest'
import * as userActions from '../ducks/user'

class Main extends React.Component {
  componentWillMount = () => {
    !this.props.interests && this.props.interestActions.fetchInterests()
  }

  addInterests = () => {
    const interests = this.props.interests.filter(interest => interest.selected)
    this.props.userActions.setInterests(interests)
  }

  render() {
    return (
      <section>
        <section className="main">
          <h1 className="headerText">What do you want to talk about?</h1>
          {this.props.interests && <InterestList interests={this.props.interests} />}
        </section>
        <Link onClick={this.addInterests} to='/Register'>
          <FloatingActionButton className="nextButton">
            <NextButton />
          </FloatingActionButton>
        </Link>

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
    interestActions: bindActionCreators(interestActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
