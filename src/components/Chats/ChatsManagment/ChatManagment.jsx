import localStyle from '../chats.module.css'
function ChatsManagment(props) {
  let textarea;
  let submitMassage = () => {
    if (textarea.value !== '') {
      props.newMassage(textarea.value);
      textarea.value = '';
    } else {
      alert('Введите текст поста');
    }
    textarea.blur();
  }
  let submitMassageKey = (e) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      if (textarea.value !== '') {
        props.newMassage(textarea.value);
        textarea.value = '';
      } else {
        alert('Введите текст поста');
      }
      textarea.blur();
    } else if (e.code === 'Enter' && e.shiftKey) {

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
      <textarea onKeyDown={submitMassageKey} onInput={input} onBlur={blur} onFocus={focus} placeholder='Your Massage' />
      <button onClick={submitMassage}>⇪</button>
    </div>
  );
}

export default ChatsManagment;