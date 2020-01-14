import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, googleAuthProvider } from '../../firebase/firebase';

import changeUserUid from '../../store/auth/actions';

import './Auth.scss';

class Auth extends Component {
  constructor() {
    super();

    auth.onAuthStateChanged(user => {
      const { changeUserUidAction } = this.props;

      if (user) {
        const { uid } = user;

        changeUserUidAction(uid);
      } else {
        changeUserUidAction('');
      }
    });
  }

  signIn = () => {
    const { changeUserUidAction } = this.props;

    auth.signInWithPopup(googleAuthProvider).then(result => {
      const { uid } = result.user;

      changeUserUidAction(uid);
    });
  };

  signOut = () => {
    const { changeUserUidAction } = this.props;

    auth.signOut().then(() => {
      changeUserUidAction('');
    });
  };

  render() {
    const { userUid } = this.props;
    const handler = userUid ? this.signOut : this.signIn;

    return (
      <div className='auth-container'>
        <button type='button' className='auth-button' onClick={handler}>
          {userUid ? 'Sign Out' : 'Google Sign-In'}
        </button>
      </div>
    );
  }
}

Auth.propTypes = {
  changeUserUidAction: PropTypes.func.isRequired,
  userUid: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userUid: state.user.userUid
});
const mapDispatchToProps = dispatch => ({
  changeUserUidAction: userUid => dispatch(changeUserUid(userUid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
