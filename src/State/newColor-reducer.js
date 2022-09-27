const newColorActionType = 'NEW-COLOR';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let randomDecorColor1 = getRandomColor();
let randomDecorColor2 = getRandomColor();

let initialState = {
  decorColor1: randomDecorColor1,
  decorColor2: randomDecorColor2,
  textColor: '#e6e6e6'
}

export const newColorActionCreator = (color, name) => {
  return {
    type: newColorActionType,
    color: color,
    name: name,
  }
}

const newColorReducer = (state = initialState, action) => {
  if (action.type === newColorActionType) {
    if (action.name === 'color1') {
      state.decorColor1 = action.color;
      let G = parseInt(action.color[3] + action.color[4], 16);
      if (G < 140) {
        state.textColor = '#e6e6e6';
      } else {
        state.textColor = '#111111';
      }
    } else {
      state.decorColor2 = action.color;
    }
  }
  return state;
}
export default newColorReducer;