import React from 'react'
import localStyle from '../chats.module.css'
import { submitMassageActionCreator } from '../../../State/State';
function ChatsManagment(props) {
  let textarea;

  let submitMassage = () => {
    let action = submitMassageActionCreator(textarea.value);
    if (textarea.value !== '') {
      props.dispatch(action);
      textarea.value = '';
    } else {
      alert('Введите текст поста');
    }
    textarea.blur();
  }
  let submitMassageKey = (e) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      let action = submitMassageActionCreator(textarea.value);
      if (textarea.value !== '') {
        props.dispatch(action);
        textarea.value = '';
      } else {
        alert('Введите текст поста');
      }
      textarea.blur();
    } else if (e.code === 'Enter' && e.shiftKey) {
      textarea.value = textarea.value + '\ ';
    }
  }

  let input = () => {
    textarea.style.height = textarea.scrollHeight + "px";
  };
  let focus = (e) => {
    textarea = e.target;
    textarea.style.height = textarea.scrollHeight + "px";
  };
  let blur = () => {
    textarea.style.height = 40 + "px";
  };
  return (
    <div className={localStyle.managment}>
      <textarea onKeyDown={submitMassageKey} onInput={input} onBlur={blur} onFocus={focus} ref={textarea} placeholder='Your Massage' />
      <button onClick={submitMassage}>⇪</button>
    </div>
  );
}

export default ChatsManagment;