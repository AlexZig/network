const submitMassageActionType = 'SUBMIT-MASSAGE';

let initialState = {
  chats: [
    { id: 0, name: 'Alex' },
    { id: 1, name: 'Leonid' },
  ],
  massages: [
    { id: 0, massageText: 'ok' },
    { id: 1, massageText: 'no' },
    { id: 2, massageText: 'yes' }
  ]
}

export const submitMassageActionCreator = (massageText) => {
  return {
    type: submitMassageActionType,
    massageText: massageText
  }
}

const massagesReducer = (state = initialState, action) => {
  if (action.type === submitMassageActionType) {
    let newMassage = {
      id: state.massages.length,
      massageText: action.massageText
    };
    state.massages.push(newMassage);
  }
  return state;
}
export default massagesReducer;