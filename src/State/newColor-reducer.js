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
  let stateCopy = { ...state };
  console.log(stateCopy)
  if (action.type === newColorActionType) {
    if (action.name === 'color1') {
      stateCopy.decorColor1 = action.color;
      console.log(stateCopy.decorColor1)
      let G = parseInt(action.color[3] + action.color[4], 16);
      if (G < 140) {
        stateCopy.textColor = '#e6e6e6';
      } else {
        stateCopy.textColor = '#111111';
      }
    } else {
      stateCopy.decorColor2 = action.color;
      console.log(stateCopy.decorColor2)
    }
  }
  console.log(stateCopy)
  let body = document.querySelector('body');
  body.style.setProperty('--decorColor1', stateCopy.decorColor1);
  body.style.setProperty('--decorColor2', stateCopy.decorColor2);
  body.style.setProperty('--decorColorText', stateCopy.textColor);
  return stateCopy;
}
export default newColorReducer;