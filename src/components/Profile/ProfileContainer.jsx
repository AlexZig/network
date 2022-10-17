import React from 'react';
import { connect } from 'react-redux';
import { newColorActionCreator } from '../../State/newColor-reducer';
import Profile from './Profile'

let mapStateToProps = (state) => {
  return {
    decorColor: state.decorColor
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    newColor: (newColorCode, newColorName) => {
      dispatch(newColorActionCreator(newColorCode, newColorName))
    }
  }
}
const ProfileContainer = connect (mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;