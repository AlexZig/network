import React from 'react';
import { connect } from 'react-redux';
import { submitMassageActionCreator } from '../../State/submitMassage-reducer';
import Chats from './Chats'

let mapStateToProps = (state) => {
  return {
    massagesData: state.chatsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    newMassage: (newMassageText) => {
      dispatch(submitMassageActionCreator(newMassageText))
    }
  }
}
const ChatsContainer = connect (mapStateToProps, mapDispatchToProps)(Chats)

export default ChatsContainer;