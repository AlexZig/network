import React from 'react'
import localStyle from '../chats.module.css'
import { submitMassageActionCreator } from '../../../State/State';
function ChatsManagment(props) {
  let textarea = React.createRef();
  let submitMassage = () => {
    let massageText = textarea.current.value;
    let action = submitMassageActionCreator(massageText);
    debugger
    if (massageText !== '') {
      props.dispatch(action);
      textarea.current.value = '';
      debugger
    } else {
      alert('Введите текст поста');
    }
    textarea.current.blur();
  }
  let submitMassageKey = (e) => {
    console.log(e)
    if (e.code === 'Enter' && !e.shiftKey) {
      let massageText = textarea.current.value;
      let action = submitMassageActionCreator(massageText);
      if (massageText !== '') {
        props.dispatch(action);
        textarea.current.value = '';
      } else {
        alert('Введите текст поста');
      }
      textarea.current.blur();
    } else if (e.code === 'Enter' && e.shiftKey) {
      textarea.current.value = textarea.current.value + '\ ';
    }
  }

  let input = () => {
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  let focus = () => {
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  let blur = () => {
    textarea.current.style.height = 60 + "px";
  };
  return (
    <div className={localStyle.managment}>
      <textarea onKeyDown={submitMassageKey} onInput={input} onBlur={blur} onFocus={focus} ref={textarea} placeholder='Your Massage' />
      <button onClick={submitMassage}>⇪</button>
    </div>
  );
}

export default ChatsManagment;